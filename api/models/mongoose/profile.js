const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  fname: {
    type: String,
  },
  lname: {
    type: String,
  },
  title: {
    type: String,
  },
  email: {
    type: String,
  },
  organization: {
    type: String,
  },
  background: {
    type: String,
  },
  image: {
    type: String,
  },
  forkedFromTimes: {
    type: Number,
  },
  forkedTimes: {
    type: Number,
  },
});

let Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;
