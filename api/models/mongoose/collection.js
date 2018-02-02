const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CollectionSchema = new Schema({
  studyIds : [Number]
});

let Collection = mongoose.model('Collection', CollectionSchema);

module.exports = Collection;

