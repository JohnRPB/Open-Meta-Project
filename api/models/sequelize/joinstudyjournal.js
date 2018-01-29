'use strict';
module.exports = (sequelize, DataTypes) => {
  var JoinStudyJournal = sequelize.define('JoinStudyJournal', {
    studyId: DataTypes.INTEGER,
    journalId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return JoinStudyJournal;
};