const mongoose = require('mongoose');

const analysisSeed = require('./analysisSeed');
const studyOverflowSeed = require('./studyOverflowSeed.js');
const userSeed = require('./userSeed.js');
const models = require('../../models/mongoose');
const Analysis = models.Analysis;
const defaults = require('./defaults.js');

const seed = async() => {
  require('../../mongo')().then(async ()=> {
    try{
      //cleans the collections
      //comment out line 15 (below) if running mongoose seeds for the first time for this project
      await Object.keys(models).forEach(model => models[model].collection.drop())
      await studyOverflowSeed();
      await analysisSeed(defaults.analysis);
      const analyses = await Analysis.find()
      for(let i = 0; i < analyses.length; i++){
        analyses[i].hist = [{histId: analyses[i], time: new Date()}];
        await Analysis.findByIdAndUpdate(analyses[i].id, analyses[i]);
      }
      await userSeed(defaults.user);
    } catch(e) {
      console.error(e);
    }
  })
    .catch(e => console.error(e));
}

seed();
