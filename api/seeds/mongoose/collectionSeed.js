const faker = require('faker');

const models = require('../../models/sequelize');
const Studies = models.Study;

const mongoose = require('mongoose');
const mongoModels = require('../../models/mongoose');

const Collection = mongoModels.Collection;

const NUMBER_OF_COLLECTIONS = 10;
const MIN_STUDIES_IN_COLLECTION = 5;

// From https://stackoverflow.com/questions/19269545/how-to-get-n-no-elements-randomly-from-an-array

const getRandom = (arr, n) => {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new rangeError('getrandom: more elements taken than available');
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len;
  }
  return result;
};

const collectionSeed = async () => {
  let studies = await Studies.findAll();
  let studyIds = studies.map(study => study.id); 
  try {
    for (var i = 0, len = NUMBER_OF_COLLECTIONS; i < len; i++) {
      let currentCollection = new Collection();
      let numberOfStudies = Math.floor(
        Math.random() * 10 + 1 + MIN_STUDIES_IN_COLLECTION,
      );
      currentCollection.studies = getRandom(studyIds, numberOfStudies);
      currentCollection.name = faker.company.bsAdjective() + " collection";
      currentCollection.save();
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = collectionSeed;
