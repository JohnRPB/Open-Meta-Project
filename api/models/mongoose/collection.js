const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CollectionSchema = new Schema({
  name: String,
  studies: [Number]
});

let Collection = mongoose.model('Collection', CollectionSchema);

module.exports = Collection;
