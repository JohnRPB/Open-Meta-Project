const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const models = require('./index.js');
const User = models.User;
const Comment = models.Comment;
const Collection = models.Collection;
const StudyOverflow = models.StudyOverflow;
const Category = models.Category;

let AnalysisSchema = new Schema({
  //id is automatic
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
        ref: 'Analysis',
      },
      time: {
        type: Date
      }
    }
  ],
  data: {
    header: {},
    inclusion: {
      collectionId: {
        type: Schema.Types.ObjectId,
        ref: "Collection"
      },
      excluded: {
        type: [Schema.Types.ObjectId],
        ref: "StudyOverflow"
      }
    },
    blocks: [{}],
    category: {
      type: [Schema.Types.ObjectId],
      ref: "Category"
    }
  }
});

AnalysisSchema.methods.fork = async function(newOwnerId) {
  let analysisBuild = {
    ownerId: newOwnerId,
    comments: [],
    hist: this.hist.splice(0).concat({histId: this._id, time: new Date()}),
    data: {
      header: {},
      inclusion: {
        collectionId: this.data.header.inclusion.collectionId,
        excluded: this.data.excluded.splice(0),
      },
      blocks: [{}],
      category: this.data.category.splice(0),
    },
  };
  let newAnalysis = new Analysis(analysisBuild);
  try{
    await newAnalysis.save();
  } catch(e) {
    console.error(e);
  }
};

const autoPop = function(next) {
  console.log('this: ', this);
  this.populate('ownerId')
    .populate('comments')
    .populate('data.inclusion.collectionId')
    .populate('data.category')
    .populate('data.inclusion.excluded');

  next();
};

AnalysisSchema.pre('find', autoPop).pre('findOne', autoPop);

let Analysis = mongoose.model('Analysis', AnalysisSchema);

module.exports = Analysis;
