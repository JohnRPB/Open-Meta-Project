'use strict';
module.exports = (sequelize, DataTypes) => {
  var JoinStudyTag = sequelize.define('JoinStudyTag', {
    studyId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER,
    weight: DataTypes.INTEGER
  });  

  JoinStudyTag.associate = function(models) {
    JoinStudyTag.belongsTo(models.Study, {
      foreignKey:"studyId"
    });

    JoinStudyTag.belongsTo(models.Tag, {
      foreignKey:"tagId"
    });
  }

  return JoinStudyTag;
};
