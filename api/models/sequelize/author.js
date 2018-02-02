'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    institution: DataTypes.STRING,
    birthYear: DataTypes.INTEGER,
  });

  Author.associate = function(models) {
    Author.hasMany(models.JoinStudyAuthor, {
      foreignKey: 'authorId',
    });

    Author.belongsToMany(models.Study, {
      through: models.JoinStudyAuthor,
      as: 'Study',
      foreignKey: 'authorId',
    });
  };
  return Author;
};
