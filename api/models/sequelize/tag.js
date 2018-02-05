'use strict';
module.exports = (sequelize, DataTypes) => {
  var Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  });

  Tag.associate = function(models) {

    Tag.hasMany(models.JoinStudyTag, {
      foreignKey:"tagId"
    });

    Tag.belongsToMany(models.Study, {
      through: models.JoinStudyTag,
      as: "Studies",
      foreignKey:"tagId"
    });

  };

  return Tag;
};
