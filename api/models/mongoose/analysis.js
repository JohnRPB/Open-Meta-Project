const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let AnalysisSchema = new Schema({
  //id is automatic
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  comments: {
    type: [Schema.Types.ObjectId],
    ref: "Comment"
  },
  hist: [
    {
      histId: {
        type: Schema.Types.ObjectId,
        ref: "Analysis"
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

// const autoPop = (next) => {
//   this
//     .populate('User')
//     .populate('Comment')
//     .populate('Analysis')
//     .populate('Collection')
//     .populate('StudyOverflow')
//     .populate('Category')
//
//   next();
// }
//
// AnalysisSchema
//   .pre('find', autoPop)
//   .pre('findOne', autoPop)
//
let Analysis = mongoose.model("Analysis", AnalysisSchema);

module.exports = Analysis;
