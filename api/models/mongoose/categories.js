const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CategorySchema = new Schema({
  name: {
    type: String,
  },
});

let Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
