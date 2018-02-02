const FullStudy = require('./FullStudy.js');
const sModels = require('../../models/sequelize');
const mModels = require('../../models/mongoose');
const Study = sModels.Study;
const StudyOverflow = mModels.StudyOverflow;

const fullStudyTest = async () => {
  require('../../mongo.js')().then(async () => {
  let sqlModel;
  let mongoModel;
  try {
    sqlModel = await Study.find({where: {id: 101}});
    // console.log(sqlModel);
    mongoModel = await StudyOverflow.find({sqlId: sqlModel.id});
    // console.log(mongoModel);
  } catch (e) {
    console.error(e);
  }
  if (mongoModel.length == 1) mongoModel = mongoModel[0];
  let fullStudy = new FullStudy();
  let sqlStudy = new FullStudy(sqlModel);
  let mongoStudy = new FullStudy(mongoModel);

  console.log(fullStudy);
  console.log(sqlStudy);
  console.log(mongoStudy);
    sqlStudy.fill().then(x => console.log('sqlStudy: \n', sqlStudy));
    mongoStudy.fill().then(x => {
      console.log('mongoStudy: \n', mongoStudy)
    })
  })
    .catch(e => console.error(e));
};

fullStudyTest();
