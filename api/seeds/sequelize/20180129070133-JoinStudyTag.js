'use strict';

const faker = require('faker');
const defaults = require('./defaults.js');
let tagNum = defaults.tag;
let studyNum = defaults.study;

module.exports = {
  up: (queryInterface, Sequelize) => {
    let joinStudyTagArray = [];
    let loopLength = studyNum > tagNum ? studyNum : tagNum;
    for (var i = 0, len = loopLength * 2; i < len; i++) {
      joinStudyTagArray.push({
        studyId: Math.floor(Math.random() * (studyNum + 1)),
        tagId: Math.floor(Math.random() * (tagNum + 1)),
        weight: Math.floor(1 + Math.random() * 100),
      });
    }
    // console.log("joinStudyTagArray: ", joinStudyTagArray);

    return queryInterface.bulkInsert('JoinStudyTags', joinStudyTagArray);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};
