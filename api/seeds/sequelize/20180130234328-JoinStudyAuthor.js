'use strict';
const defaults = require('./defaults.js');
let studyNum = defaults.study;
let authorNum = defaults.author;

module.exports = {
  up: (queryInterface, Sequelize) => {
    let loopLength = studyNum > authorNum ? studyNum : authorNum;
    let joinStudyAuthorArray = [];
    for (let i = 0, len = loopLength * 2; i < len; i++) {
      joinStudyAuthorArray.push({
        studyId: Math.floor(Math.random() * (studyNum + 1)),
        authorId: Math.floor(Math.random() * (authorNum + 1)),
      });
    }
    // console.log("joinStudyAuthorArray: \n", joinStudyAuthorArray);

    return queryInterface.bulkInsert('JoinStudyAuthors', joinStudyAuthorArray);
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
