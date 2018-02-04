const express = require('express');
const axios = require('axios');
const fs = require('fs');
const webCrawl = require('../lib/webCrawl/webCrawl.js');
const sModels = require('./../models/sequelize');
const mModels = require('./../models/mongoose');
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

router.post('/submit', async (req, res, next) => {
  const bodyInfo = req.body;
  try {
    let currentStudy = await Study.find({
      where: {
        name: {
          [Op.iLike]: bodyInfo.study.name,
        },
      },
    });

    if (!currentStudy) {
      let studyJournal = await Journal.find({
        where: {
          name: {
            [Op.iLike]: bodyInfo.journal.name,
          },
        },
      });

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
      let studyBuild = {};
      Object.keys(bodyInfo.study).forEach(key => {
        studyBuild[key] = bodyInfo.study[key];
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
    res.status(200).send();
  } catch (e) {
    console.error(e);
    res.status(500).send(e.stack);
  }
});

router.get('/search', async (req, res, next) => {
  let query = req.query;
  let results = [];
  let hashObj = {};

  if (query.tags) {
    let tagParams = {
      where: {
        [Op.or]: [],
      },
      include: [{model: Study, as: 'TaggedArea'}],
    };
    let tagArray = query.tags.split('_');
    tagArray.forEach(tag => {
      tagParams.where[Op.or].push({name: {[Op.iLike]: `%${tag}%`}});
    });
    let tagResults;
    try {
      tagResults = await Tag.findAll(tagParams);
      console.log(tagResults);
    } catch (e) {
      res.status(500).send(e.stack);
    }
    if (tagResults.length) {
      tagResults.forEach(result => {
        result.TaggedArea.forEach(study => {
          if (hashObj[study.id] == undefined) {
            results.push(study.dataValues);
            hashObj[study.id] = 1;
          }
        });
      });
    }
  }

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
      include: [{model: Study, as: 'Study'}],
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

  res.send(JSON.stringify(results));
});

router.get('/ids', async (req, res, next) => {
  let results = [];
  let query = req.query.studies;
  let queryParams = {
    where: {
      id: {
        [Op.or]: [],
      },
    },
  };
  if (query[0] == '_') {
    query = query.substring(1);
  }
  let idArray = query.split('_');
  idArray.forEach(id => {
    queryParams.where.id[Op.or].push(Number(id));
  });
  let rawStudies;
  try {
    rawStudies = await Study.findAll(queryParams);
    console.log(rawStudies)
  } catch (e) {
    res.status(500).send(e.stack);
  }
  if (rawStudies.length) {
    rawStudies.map(study => {
      results.push(study.dataValues);
    });
  }

  res.send(JSON.stringify(results));

});
module.exports = router;
