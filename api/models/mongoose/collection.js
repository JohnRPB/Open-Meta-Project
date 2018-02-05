const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CollectionSchema = new Schema({
  name: String,
  studies: [Number],
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  comments: {
    type: [Schema.Types.ObjectId],
    ref: 'Comment',
  },
  hist: [
    {
      histId: {
        type: Schema.Types.ObjectId,
        ref: 'Collection',
      },
      time: {
        type: Date,
      },
    },
  ],
  category: {
    type: [Schema.Types.ObjectId],
    ref: 'Category',
  },
});

// const autoPop = (next) => {
//   this
//     .populate('User')
//     .populate('Comment')
//     .populate('Collection')
//     .populate('Category')
//
//   next();
// }
//
// CollectionSchema
//   .pre('find', autoPop)
//   .pre('findOne', autoPop)

let Collection = mongoose.model('Collection', CollectionSchema);

module.exports = Collection;
