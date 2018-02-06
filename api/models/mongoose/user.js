const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  email: {
    type: String,
  },
  passHash: {
    type: String,
  },
  analyses: {
    type: [Schema.Types.ObjectId],
    ref: 'Analysis'
  },
  collections: {
    type: [Schema.Types.ObjectId],
    ref: 'Collection'
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  },
  interests: {
    type: [Schema.Types.ObjectId],
    ref: 'Category'
  },
});

const autoPop = (next) => {
  this
    .populate('profile')
    .populate('interests')

  next();
}
UserSchema
  .pre('find', autoPop)
  .pre('findOne', autoPop)

let User = mongoose.model('User', UserSchema);

module.exports = User;
