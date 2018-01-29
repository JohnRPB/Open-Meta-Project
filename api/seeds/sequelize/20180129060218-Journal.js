'use strict';

const faker = require('faker');
let journalNum = require("./defaults").journal;

module.exports = {
  up: (queryInterface, Sequelize) => {

    let journals = [];

    for (var i = 0, len = journalNum; i < len; i++) {
      journals.push({
        name: `Journal of ${faker.name.jobArea()}`,
        publisher: `${faker.name.jobType()} & Sons`
      });
    }
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Journals", journals);
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
