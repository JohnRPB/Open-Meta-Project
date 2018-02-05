const mongoose = require('mongoose');

const analysisSeed = require('./analysisSeed');
const studyOverflowSeed = require('./studyOverflowSeed.js');
const userSeed = require('./userSeed.js');
const profileSeed = require('./profileSeed.js');
const collectionSeed = require('./collectionSeed');
const models = require('../../models/mongoose');
const Analysis = models.Analysis;
const defaults = require('./defaults.js');
const Collection = models.Collection;

const seed = async () => {
  require('../../mongo')()
    .then(async () => {
      try {
        //cleans the collections
        await Object.keys(models).forEach(model =>
          models[model].collection.drop(),
        );
        await studyOverflowSeed();
        await analysisSeed(defaults.analysis);
        const analyses = await Analysis.find();
        for (let i = 0; i < analyses.length; i++) {
          analyses[i].hist = [{histId: analyses[i], time: new Date()}];
          await Analysis.findByIdAndUpdate(analyses[i].id, analyses[i]);
        }
        await collectionSeed(defaults.collection);
        await profileSeed(defaults.user);
        await userSeed(defaults.user);
        return 1;
      } catch (e) {
        console.error(e);
      }
    })
    .then(value => {
      if(value == 1){
        process.exit(0);
      } else {
        process.exit(1);
      }
    })
    .catch(e => console.error(e));
};

seed();
