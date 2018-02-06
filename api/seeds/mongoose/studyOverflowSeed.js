const models = require('../../models/sequelize');
const Studies = models.Study;
const mongoose = require('mongoose');
const mongoModels = require('../../models/mongoose');
const StudyOverflow = mongoModels.StudyOverflow;

const studyOverflowSeed = async () => {
  try {
    let studies = await Studies.findAll();
    for (let i = 0; i < studies.length; i++) {
      let currentStudyOverflow = new StudyOverflow();
      currentStudyOverflow.sqlId = studies[i].id;
      currentStudyOverflow.payload = {url: studies[i].url};
      await currentStudyOverflow.save();
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = studyOverflowSeed;
