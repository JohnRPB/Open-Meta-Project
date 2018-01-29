'use strict';
module.exports = (sequelize, DataTypes) => {
  var JoinStudyTag = sequelize.define('JoinStudyTag', {
    studyId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return JoinStudyTag;
};