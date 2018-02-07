'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Studies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DOI: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      journalId: {
        type: Sequelize.INTEGER
      },
      pubDate: {
        type: Sequelize.DATEONLY
      },
      sampleSize: {
        type: Sequelize.INTEGER
      },
      testStatType: {
        type: Sequelize.STRING
      },
      testStatVal: {
        type: Sequelize.FLOAT
      },
      effectSizeType: {
        type: Sequelize.STRING
      },
      effectSizeVal: {
        type: Sequelize.FLOAT
      },
      stdErr: {
        type: Sequelize.FLOAT
      },
      url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Studies');
  }
};
