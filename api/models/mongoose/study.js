const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudyOverflowSchema = new Schema({
  sqlId: {
    type: Number
  },
  payload: {
    type: {}
  }
})

let StudyOverflow = mongoose.model('StudyOverflow', StudyOverflowSchema);

module.exports = StudyOverflow;
