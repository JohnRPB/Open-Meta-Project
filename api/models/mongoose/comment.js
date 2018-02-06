const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  text: {
    type: String,
  },
  date: {
    type: Date,
  },
});

// const autoPop = next => {
//   this.populate('User');
//
//   next();
// };
// CommentSchema.pre('find', autoPop).pre('findOne', autoPop);

let Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
