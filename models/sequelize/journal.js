'use strict';
module.exports = (sequelize, DataTypes) => {
  var Journal = sequelize.define('Journal', {
    name: DataTypes.STRING,
    publisher: DataTypes.STRING
  });

  Journal.associate = function(models) {
    Journal.hasMany(models.Study, {
      foreignKey:"journalId"
    });
  };

  return Journal;
};
