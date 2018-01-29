'use strict';
module.exports = (sequelize, DataTypes) => {
  var JoinStudyAuthor = sequelize.define('JoinStudyAuthor', {
    studyId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return JoinStudyAuthor;
};
