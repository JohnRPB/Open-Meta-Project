'use strict';
const faker = require("faker");
const defaults = require("./defaults.js");
const studyNum = defaults.study;
const journalNum = defaults.journal;
const authorNum = defaults.author;

module.exports = {
  up: (queryInterface, Sequelize) => {
    let authors = [];
    for(let i=0; i<authorNum; i++){
      authors.push({
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        userId: i,
        institution: faker.company.companyName(),
        birthYear: 1960 + i
      });
    }
  return queryInterface.bulkInsert("Authors", authors);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
