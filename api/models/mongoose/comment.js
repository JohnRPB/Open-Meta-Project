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

const autoPop = function(next){
  // this.populate({path:'user', select:'email'});

  next();
};
CommentSchema.pre('find', autoPop).pre('findOne', autoPop);

let Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
