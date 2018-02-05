const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let AnalysisSchema = new Schema({
  //id is automatic
  hist: [
    {
      histId: {
        type: Schema.Types.ObjectId
      },
      time: {
        type: Date
      }
    }
  ],
  data: {
    header: {},
    inclusion: {
      included: [Schema.Types.ObjectId],
      excluded: [Schema.Types.ObjectId]
    },
    analyses: [
      {
        category: {
          type: String
        },
        content: {
          type: String
        }
      }
    ]
  }
});

let Analysis = mongoose.model("Analysis", AnalysisSchema);

module.exports = Analysis;
