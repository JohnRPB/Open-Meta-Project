// repl.js

//var mongoose = require('mongoose');
var repl = require('repl').start({});
var models = {
  //mongoose: require('./models/mongoose'),
  sequelize: require('./models/sequelize')
};
//var helpers = require('./helpers');


// ----------------------------------------
// Sequelize
// ----------------------------------------
Object.keys(models.sequelize).forEach((modelName) => {
  console.log("modelName: ", modelName);
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

//console.log("How about here?");
//require('./mongo')().then(() => {
  //console.log("are we getting in here?");
  //repl.context.models = models;
  //repl.context.helpers = helpers;
  //console.log("repl.context.models: ", repl.context.models);
  


  //// ----------------------------------------
  //// Helpers
  //// ----------------------------------------
  //Object.keys(helpers).forEach((key) => {
    //repl.context[key] = helpers[key];
  //});


  //// ----------------------------------------
  //// Mongoose
  //// W
  //// ----------------------------------------
  //// Object.keys(models.mongoose).forEach((modelName) => {
  ////  repl.context[modelName] = mongoose.model(modelName);
  ////});


  //// ----------------------------------------
  //// Sequelize
  //// ----------------------------------------
  //Object.keys(models.sequelize).forEach((modelName) => {
    //console.log("modelName: ", modelName);
    //repl.context[modelName] = models.sequelize[modelName];
  //});


  //// ----------------------------------------
  //// Logging
  //// ----------------------------------------
  //repl.context.lg = (data) => {
    //if (Array.isArray(data)) {
      //if (data.length && data[0].dataValues) {
        //data = data.map(item => item.dataValues);
      //}
    //}
    //console.log(data);
  //};
//}).catch((err) => {
  //console.error(err)
//});


