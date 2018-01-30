'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    institution: DataTypes.STRING,
    birthYear: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Author;
};