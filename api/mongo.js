var mongoose = require('mongoose');

// Same as sequelize setup; grab subset of config file that corresponds to current run environment
var env = process.env.NODE_ENV || 'development';
var config = require('./config/mongoose/mongo')[env];


module.exports = () => {

  let envUrl = process.env[config.use_env_variable];
  let localUrl = `mongodb://${config.host}/${config.database}`;

  let mongoUrl = envUrl ? envUrl : localUrl;
  return mongoose.connect(mongoUrl);
};
