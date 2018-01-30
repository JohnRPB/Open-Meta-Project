'use strict';
module.exports = (sequelize, DataTypes) => {
  var Study = sequelize.define('Study', {
    DOI: DataTypes.STRING,
    name: DataTypes.STRING,
    journalId: DataTypes.INTEGER,
    pubDate: DataTypes.DATEONLY,
    sampleSize: DataTypes.INTEGER,
    testStatType: DataTypes.STRING,
    testStatVal: DataTypes.FLOAT,
    stdErr: DataTypes.FLOAT
  });

  Study.associate = function(models) {
    Study.belongsTo(models.Journal, {
      foreignKey:"journalId"
    });

    Study.hasMany(models.JoinStudyTag, {
      foreignKey:"studyId"
    });

    Study.belongsToMany(models.Tag, {
      through: models.JoinStudyTag,
      as: "TaggedStudy",
      foreignKey:"studyId"
    });
  };
  
  return Study;

};
