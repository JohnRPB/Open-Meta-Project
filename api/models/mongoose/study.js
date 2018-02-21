const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const smodels = require("../sequelize/");
const Study = smodels.Study;

let StudyOverflowSchema = new Schema({
  sqlId: {
    type: Number
  },
  payload: {
    type: {}
  }
});

StudyOverflowSchema.methods.sqlPop = function() {
  return Study.find({
    where: {
      id: this.sqlId
    }
  })
    .then(study => {
      if (study.dataValues) {
        this._doc.sqlStudy = study.dataValues;
      }
      return this;
    })
    .catch(err => {
      console.error(err);
    });
};
// const unSQL = function(next) {
//   if (this._update.sqlStudy) {
//     delete this._update.sqlStudy;
//   }
//   next();
// };

StudyOverflowSchema
  // .pre("update", unSQL)
  // .pre("findOneAndUpdate", unSQL)
  .post("find", async function(docs) {
    for (let i = 0; i < docs.length; i++) {
      try {
        await docs[i].sqlPop();
      } catch (e) {
        console.error(e);
      }
    }
    return docs;
  })
  .post("findOne", async function(doc) {
    try {
      await doc.sqlPop();
    } catch (e) {
      console.error(e);
    }
    return doc;
  });

let StudyOverflow = mongoose.model("StudyOverflow", StudyOverflowSchema);

module.exports = StudyOverflow;
