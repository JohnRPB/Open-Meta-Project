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
    effectSizeType: DataTypes.STRING,
    effectSizeVal: DataTypes.FLOAT,
    stdErr: DataTypes.FLOAT,
    url: DataTypes.STRING,
  });

  Study.associate = function(models) {
    Study.belongsTo(models.Journal, {
      foreignKey: 'journalId',
    });

    Study.hasMany(models.JoinStudyTag, {
      foreignKey: 'studyId',
    });

    Study.belongsToMany(models.Tag, {
      through: models.JoinStudyTag,
      as: 'Tags',
      foreignKey: 'studyId',
    });

    Study.hasMany(models.JoinStudyAuthor, {
      foreignKey: 'studyId',
    });

    Study.belongsToMany(models.Author, {
      through: models.JoinStudyAuthor,
      as: 'Authors',
      foreignKey: 'studyId',
    });
  };

  return Study;
};
