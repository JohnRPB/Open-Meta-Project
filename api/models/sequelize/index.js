'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(__filename);

// Selects subset of config file that matches application deployment state (e.g. 'development' or 'production')
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../../config/sequelize/config.js')[env];

// console.log("------------------- START process.env.NODE_ENV -------------------");
// console.log(process.env.NODE_ENV);
// console.log("-------------------- END process.env.NODE_ENV --------------------");


var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
