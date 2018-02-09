'use strict';

const faker = require('faker');
const defaults = require('./defaults.js');
const studyNum = defaults.study;
const journalNum = defaults.journal;
const reals = require('../../newStudies.js');

module.exports = {
  up: (queryInterface, Sequelize) => {
    const testStatTypes = ['t', 'z', 'f', 'eta'];
    const effectSizeTypes = ['d', 'r', 'eta', 'h'];

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
        effectSizeType: effectSizeTypes[Math.floor(Math.random() * 4)],
        effectSizeVal: Math.random() * 2,
        stdErr: Math.random() * 1,
        url: `${faker.internet.url()}/${faker.random.uuid()}`,
      });
    }
    for (var i = 0; i < reals.length; i++) {
      let bodyObj = reals[i];
      bodyObj.url = `${faker.internet.url()}/${faker.random.uuid()}`;
      studies.push(bodyObj);
    }
    console.log('past both loops');

    return queryInterface.bulkInsert('Studies', studies);
  },

  down: (queryInterface, Sequelize) => {},
};
