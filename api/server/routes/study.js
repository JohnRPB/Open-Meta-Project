const express = require('express');
const axios = require('axios');
const fs = require('fs');
const webCrawl = require('../../lib/webCrawl/webCrawl.js');
const sModels = require('./../../models/sequelize');
const mModels = require('./../../models/mongoose');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Study = sModels.Study;
const Journal = sModels.Journal;
const Tag = sModels.Tag;
const Author = sModels.Author;
const JoinStudyTag = sModels.JoinStudyTag;
const JoinStudyAuthor = sModels.JoinStudyAuthor;
const StudyOverflow = mModels.StudyOverflow;

let router = express.Router();

// ---------------------------------------------------------
// SUBMIT STUDY TO THE DATABASE
// 2018-03-01 16:28
// ---------------------------------------------------------

router.post('/submit', async (req, res, next) => {
  const bodyInfo = req.body;
  try {

    // Fetch a study with (something close to) the same name as the submitting 
    // study, if it exists
    let currentStudy = await Study.find({
      where: {
        name: {
          [Op.iLike]: bodyInfo.study.name,
        },
      },
    });

    // If the submitting study is new, fetch that study's journal in the db,
    // if it exists
    if (!currentStudy) {
      let studyJournal = await Journal.find({
        where: {
          name: {
            [Op.iLike]: bodyInfo.journal.name,
          },
        },
      });

      // If the submitting study's journal isn't in the db, construct it as 
      // a model and save it
      if (!studyJournal) {
        let journalBuild = {};
        Object.keys(bodyInfo.journal).forEach(key => {
          journalBuild[key] = bodyInfo.journal[key];
        });
        studyJournal = Journal.build(journalBuild);
        await studyJournal.save();
        studyJournal = await Journal.find({
          where: {
            name: bodyInfo.journal.name,
          },
        });
      }

      // Construct study model and submit it (makes a new model regardless of
      // whether study already in db)
      let studyBuild = {};
      Object.keys(bodyInfo.study).forEach(key => {
        studyBuild[key] = bodyInfo.study[key];
      });
      studyBuild.url = bodyInfo.url;
      studyBuild.journalId = studyJournal.id;
      Object.keys(bodyInfo.study.stats).forEach(statKey => {
        studyBuild[statKey] = bodyInfo.study.stats[statKey];
      });
      currentStudy = Study.build(studyBuild);
      await currentStudy.save();
      currentStudy = await Study.find({
        where: {
          name: bodyInfo.study.name,
        },
      });
    }

    for (let i = 0; i < bodyInfo.authors.length; i++) {
      let currentAuthor = await Author.find({
        where: {
          name: {
            [Op.iLike]: bodyInfo.authors[i].name,
          },
        },
      });
      if (!currentAuthor) {
        let authorBuild = {};
        Object.keys(bodyInfo.authors[i]).forEach(key => {
          authorBuild[key] = bodyInfo.authors[i][key];
        });
        currentAuthor = Author.build(authorBuild);
        await currentAuthor.save();
        currentAuthor = await Author.find({
          where: {
            name: bodyInfo.authors[i].name,
          },
        });
      }
      let currentSAJoin = await JoinStudyAuthor.find({
        where: {
          studyId: currentStudy.id,
          authorId: currentAuthor.id,
        },
      });
      if (!currentSAJoin) {
        currentSAJoin = JoinStudyAuthor.build({
          studyId: currentStudy.id,
          authorId: currentAuthor.id,
        });
        await currentSAJoin.save();
      }
    }

    let mongoStudy = await StudyOverflow.findOne({sqlId: currentStudy.id});
    if (!mongoStudy) {
      mongoStudy = new StudyOverflow();
      mongoStudy.sqlId = currentStudy.id;
      await mongoStudy.save();
      mongoStudy = await StudyOverflow.findOne({sqlId: currentStudy.id});
    }

    mongoStudy.payload = mongoStudy.payload || {};
    mongoStudy.payload.url = mongoStudy.payload.url || [];
    if (!mongoStudy.payload.url.includes(bodyInfo.url)) {
      mongoStudy.payload.url.push(bodyInfo.url);
      if (bodyInfo.other)
        mongoStudy.payload[new Date().toString()] = bodyInfo.other;
      await StudyOverflow.findByIdAndUpdate(mongoStudy.id, mongoStudy);
      let tagArray = await webCrawl(bodyInfo.url);
      for (let i = 0; i < tagArray.length; i++) {
        let currentTag = await Tag.find({
          where: {
            name: tagArray[i][0],
          },
        });
        if (!currentTag) {
          tagBuild = {};
          tagBuild.name = tagArray[i][0];
          currentTag = Tag.build(tagBuild);
          await currentTag.save();
          currentTag = await Tag.find({
            where: {
              name: tagArray[i][0],
            },
          });
        }
        let currentSTJoin = await JoinStudyTag.find({
          where: {
            studyId: currentStudy.id,
            tagId: currentTag.id,
          },
        });
        if (!currentSTJoin) {
          let stBuild = {
            studyId: currentStudy.id,
            tagId: currentTag.id,
          };
          currentSTJoin = JoinStudyTag.build(stBuild);
          await currentSTJoin.save();
        }
      }
    }
    res.send(JSON.stringify([currentStudy.dataValues]));
  } catch (e) {
    console.error(e);
    res.status(500).send(e.stack);
  }
});

router.get('/search', async (req, res, next) => {
  let query = req.query;
  let results = [];
  let hashObj = {};

  if (query.study) {
    let studyParams = {
      where: {
        [Op.or]: [],
      },
    };
    let nameArray = query.study.split('_');
    nameArray.forEach(word => {
      studyParams.where[Op.or].push({
        name: {
          [Op.iLike]: `%${word}%`,
        },
      });
    });
    let studyResults;
    try {
      studyResults = Study.findAll(studyParams);
    } catch (e) {
      res.status(500).send(e.stack);
    }
    if (studyResults.length) {
      studyResults.forEach(study => {
        if (hashObj[study.id] == undefined) {
          results.push(study.dataValues);
          hashObj[study.id] = 1;
        }
      });
    }
  }

  if (query.author) {
    let authorParams = {
      where: {
        [Op.or]: [],
      },
      include: [{model: Study, as: 'Studies'}],
    };
    let authorArray = query.author.split('_');
    authorArray.forEach(name => {
      authorParams.where[Op.or].push({name: {[Op.iLike]: `%${name}%`}});
    });
    let authorResults;
    try {
      authorResults = await Author.findAll(authorParams);
    } catch (e) {
      res.status(500).send(e.stack);
    }
    if (authorResults.length) {
      authorResults.forEach(author => {
        author.Study.forEach(study => {
          if (hashObj[study.id] == undefined) {
            results.push(study.dataValues);
            hashObj[study.id] = 1;
          }
        });
      });
    }
  }

  if (query.journal) {
    let journalParams = {
      where: {
        [Op.or]: [],
      },
      include: [{model: Study}],
    };
    let journalArray = query.journal.split('_');
    journalArray.forEach(journalKey => {
      journalParams.where[Op.or].push({
        name: {
          [Op.iLike]: `%${journalKey}%`,
        },
      });
    });
    let journalResults;
    try {
      journalResults = await Journal.findAll(journalParams);
    } catch (e) {
      res.status(500).send(e.stack);
    }
    if (journalResults.length) {
      journalResults.forEach(journal => {
        journal.Studies.forEach(study => {
          if (hashObj[study.id] == undefined) {
            results.push(study.dataValues);
            hashObj[study.id] = 1;
          }
        });
      });
    }
  }

  if (query.tags) {
    let tagSearchArray = [];
    let i = 0;
    while ((results.length + tagSearchArray.length < 30) & (i < 5)) {
      let tagParams = {
        where: {
          [Op.or]: [],
        },
        include: [{model: Study, as: 'Studies'}],
      };
      let tagArray = query.tags.split('_');
      tagArray.forEach(tag => {
        if (tag.length - i > 0) {
          let tagMod = tag.substring(0, tag.length - i);
          tagParams.where[Op.or].push({name: {[Op.iLike]: `%${tagMod}%`}});
        }
      });
      let tagResults;
      try {
        tagResults = await Tag.findAll(tagParams);
        // console.log(tagResults);
      } catch (e) {
        res.status(500).send(e.stack);
      }
      if (tagResults.length) {
        tagResults.forEach(result => {
          result.Studies.forEach(study => {
            if (hashObj[study.id] == undefined) {
              tagSearchArray.push([
                study.dataValues,
                study.JoinStudyTag.weight / i,
              ]);
              hashObj[study.id] = 1;
            }
          });
        });
        tagSearchArray.sort((x, y) => (x[1] < y[1] ? 1 : x[1] > y[1] ? -1 : 0));
        // console.log(tagSearchArray);
        tagSearchArray.forEach(study => {
          results.push(study[0]);
        });
        // console.log(results);
      }
      i += 2;
    }
  }

  res.send(JSON.stringify(results.slice(0, 30)));
});

router.get('/ids', async (req, res, next) => {

  // Assemble OR SQL query on study Ids by deconstructing query params (?ids=34_35_36 ...)
  // -----------------------
  let results = [];
  let query = req.query.studies;
  let queryParams = {
    where: {
      id: {
        [Op.or]: [],
      },
    },
  };
  if (query[0] == '_') query = query.substring(1);
  let idArray = query.split('_');
  idArray.forEach(id => {
    queryParams.where.id[Op.or].push(Number(id));
  });

  // Get studies
  // -----------------------

  // return full study models from SQL
  let rawStudies;
  try {
    rawStudies = await Study.findAll(queryParams);
  } catch (e) {
    res.status(500).send(e.stack);
  }

  // filter for relevant attributes
  if (rawStudies.length) {
    rawStudies.map(study => {
      results.push(study.dataValues);
    });
  }

  res.send(JSON.stringify(results));
});
module.exports = router;
