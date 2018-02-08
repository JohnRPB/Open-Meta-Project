const mongoose = require("mongoose");
const mongoModels = require("../../models/mongoose");
const Analysis = mongoModels.Analysis;
const User = mongoModels.User;
const StudyOverflow = mongoModels.StudyOverflow;
const faker = require("faker");
const models = require("../../models/sequelize");
const Authors = models.Author;
const Studies = models.Study;

const seed = async n => {
  try {
    let authors = await Authors.findAll();
    let studies = await StudyOverflow.find();
    let users = await User.find();
    for (let i = 0; i < n; i++) {
      let idArray = [];
      let includeArray = [];
      let excludeArray = [];
      let analysesArray = [];
      for (let i = 0; i < 3; i++) {
        idArray.push(authors[Math.floor(Math.random() * authors.length)].id);
        excludeArray.push(
          studies[Math.floor(Math.random() * studies.length)].id
        );
        let analysisObj = {
          category: ["text", "graphic"][Math.floor(Math.random() * 2)],
          content: ""
        };
        if (analysisObj.category === "text") {
          analysisObj.content = faker.lorem.paragraph();
        }
        analysesArray.push(analysisObj);
      }
      for (let i = 0; i < 15; i++) {
        let randNum = Math.floor(Math.random() * studies.length);
        if (
          studies[randNum]._id == excludeArray[0].toString() ||
          studies[randNum]._id == excludeArray[1].toString() ||
          studies[randNum]._id == excludeArray[2].toString()
        ) {
          continue;
        }
        includeArray.push(studies[randNum].id);
      }
      let thisAnalysis = new Analysis();
      thisAnalysis.hist = []; //[{histKey: thisAnalysis.id, time: new Date()}];
      thisAnalysis.data = {
        header: {
          title: "An analysis of " + faker.name.jobType(),
          author: idArray
        },
        inclusion: {
          included: includeArray,
          excluded: excludeArray
        },
        analyses: analysesArray
      };

      await thisAnalysis.save();
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = seed;
