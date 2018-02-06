const faker = require('faker');

const models = require('../../models/sequelize');
const Studies = models.Study;

const mongoose = require('mongoose');
const mongoModels = require('../../models/mongoose');

const Collection = mongoModels.Collection;

const NUMBER_OF_COLLECTIONS = 10;
const MIN_STUDIES_IN_COLLECTION = 5;

// From https://stackoverflow.com/questions/19269545/how-to-get-n-no-elements-randomly-from-an-array

// const getRandom = (arr, n) => {
//   var result = new Array(n),
//     len = arr.length,
//     taken = new Array(len);
//   if (n > len) console.error("getrandom: more elements taken than available");
//   while (n--) {
//     var x = Math.floor(Math.random() * len);
//     result[n] = arr[x in taken ? taken[x] : x];
//     taken[x] = --len;
//   }
//   return result;
// };

const collectionSeed = async n => {
  let studies = await Studies.findAll();
  let studyIds = studies.map(study => study.id);
  try {
    for (let i = 0; i < n; i++) {
      let currentCollection = new Collection();
      let numberOfStudies = Math.floor(Math.random() * 15 + 5);
      currentCollection.studies = [];
      for (let j = 0; j < numberOfStudies; j++) {
        let randomIndex = Math.floor(Math.random() * studies.length);
        while (currentCollection.studies.includes(studies[randomIndex].id)) {
          if (currentCollection.studies.length === studies.length) {
            break;
          }
          randomIndex = Math.floor(Math.random() * studies.length);
        }
        currentCollection.studies.push(studies[randomIndex].id);
      }

      currentCollection.name = faker.company.bsAdjective() + ' collection';
      await currentCollection.save();
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = collectionSeed;
