// repl.js

var mongoose = require('mongoose');
var repl = require('repl').start({});
var models = {
  mongoose: require('./models/mongoose'),
  sequelize: require('./models/sequelize')
};
// var helpers = require('./helpers');


require('./mongo')().then(() => {
  repl.context.models = models;
  // repl.context.helpers = helpers;


  // ----------------------------------------
  // Helpers
  // ----------------------------------------
  // Object.keys(helpers).forEach((key) => {
  //   repl.context[key] = helpers[key];
  // });


  // ----------------------------------------
  // Mongoose
  // ----------------------------------------
  Object.keys(models.mongoose).forEach((modelName) => {
    repl.context[modelName] = mongoose.model(modelName);
  });


  // ----------------------------------------
  // Sequelize
  // ----------------------------------------
  Object.keys(models.sequelize).forEach((modelName) => {
    repl.context[modelName] = models.sequelize[modelName];
  });


  // ----------------------------------------
  // Logging
  // ----------------------------------------
  repl.context.lg = (data) => {
    if (Array.isArray(data)) {
      if (data.length && data[0].dataValues) {
        data = data.map(item => item.dataValues);
      }
    }
    console.log(data);
  };
});
