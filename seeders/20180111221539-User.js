'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {

    let godNames = [
      "The Aesir",
      "Balder",
      "Frigg",
      "Thor",
      "Tyri",
      "Freya",
      "hoenir",
      "Loourr",
      "Loki",
      "Mani",
      "Mimir",
      "Meili",
      "Mjoror",
      "Mor",
      "Saxnot",
      "Tyr",
      "Ullr",
      "Vali"
    ];

    var users = [];
    for (let i = 0; i < godNames.length; i++) {
      users.push({
        username: `${godNames[i]}`,
        passwordHash: `${Math.random() * (9999 - 1000) + 1000}`
      });
    }
    return queryInterface.bulkInsert("Users", users);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
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
