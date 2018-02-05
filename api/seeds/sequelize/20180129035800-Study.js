'use strict';

const faker = require('faker');
const defaults = require('./defaults.js');
const studyNum = defaults.study;
const journalNum = defaults.journal;

module.exports = {
  up: (queryInterface, Sequelize) => {
    const testStatTypes = ['t', 'z', 'f', 'eta'];

    let studies = [];
    for (var i = 0, len = studyNum; i < len; i++) {
      studies.push({
        DOI: faker.internet.ip(),
        name: faker.lorem.words(),
        journalId: Math.floor(Math.random() * (journalNum + 1)),
        pubDate: faker.date.past(),
        sampleSize: Math.floor(Math.random() * 200 + 100),
        testStatType: testStatTypes[Math.floor(Math.random() * 4)],
        testStatVal: Math.random() * 2,
        stdErr: Math.random() * 1,
        url: `${faker.internet.url()}/${faker.random.uuid()}`,
      });
    }

    return queryInterface.bulkInsert('Studies', studies);
  },

  //[>
  //Add altering commands here.
  //Return a promise to correctly handle asynchronicity.

  //Example:
  //return queryInterface.bulkInsert('Person', [{
  //name: 'John Doe',
  //isBetaMember: false
  //}], {});
  //*/
  //},

  down: (queryInterface, Sequelize) => {
    //[>
    //Add reverting commands here.
    //Return a promise to correctly handle asynchronicity.
    //Example:
    //return queryInterface.bulkDelete('Person', null, {});
    //*/
  },
};
