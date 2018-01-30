'use strict';

const faker = require("faker");
const defaults = require("./defaults.js");
const tagNum = defaults.tag;

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    let tags = [];
    for (var i = 0, len = tagNum; i < len; i++) {
      tags.push({
        name: faker.name.jobDescriptor(),
      });
    }

  return queryInterface.bulkInsert("Tags", tags);
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
