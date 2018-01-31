var mongoose = require('mongoose');
var env = process.env.NODE_ENV || 'development';
var config = require('./config/mongoose/mongo')[env];


module.exports = () => {
  let envUrl = process.env[config.use_env_variable];
  let localUrl = `mongodb://${config.host}/${config.database}`;
  let mongoUrl = envUrl ? envUrl : localUrl;
  return mongoose.connect(mongoUrl);
};
