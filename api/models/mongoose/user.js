const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  email: {
    type: String,
  },
  passHash: {
    type: String,
  },
  analyses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Analysis',
    },
  ],
  collections: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Collection',
    },
  ],
  profile: {
    type: Schema.Types.ObjectId,
    ref: 'Profile',
  },
  interests: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
});

const autoPop = function(next) {
  this.populate('analyses')
    .populate('collections')
    .populate('profile')
    .populate('interests');

  next();
};
const unPop = function(next) {
  console.log('update: ', this.update());
  console.log('getUpdate: ', this.getUpdate());
  next();
};

const postUpdate = function(doc) {
  console.log(doc);
  console.log(doc._doc);
};
UserSchema.pre('find', autoPop)
  .pre('findOne', autoPop)
  .pre('findById', autoPop);
// .pre('update', unPop)
// .pre('findOneAndUpdate', unPop)
// .pre('findByIdAndUpdate', unPop)
// .post('update', postUpdate)
// .post('findOneAndUpdate', postUpdate)
// .post('findByIdAndUpdate', postUpdate)

let User = mongoose.model('User', UserSchema);

module.exports = User;
