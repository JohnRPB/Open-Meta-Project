const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const models = require("./index.js");
const smodels = require("../sequelize/");
const Study = smodels.Study;
const User = models.User;
const Comment = models.Comment;
const Category = models.Category;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

let CollectionSchema = new Schema({
  name: String,
  studies: [Number],
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  description: String,
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  hist: [
    {
      histId: {
        type: Schema.Types.ObjectId,
        ref: "Collection"
      },
      time: {
        type: Date
      }
    }
  ],
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category"
    }
  ]
});

CollectionSchema.methods.fork = async function(newOwnerId) {
  let collectionBuild = {
    ownerId: newOwnerId,
    studies: this.studies.splice(0),
    hist: this.hist.splice(0).concat({ histId: this._id, time: new Date() }),
    category: this.data.category.splice(0)
  };
  let newCollection = new Collection(collectionBuild);
  try {
    await newCollection.save();
  } catch (e) {
    console.error(e);
  }
};

CollectionSchema.methods.sqlFind = function() {
  return Study.findAll({
    where: {
      id: {
        [Op.in]: this.studies
      }
    }
  })
    .then(studyArray => {
      this._doc.studies = studyArray;
      for (let i = 0; i < this._doc.studies.length; i++) {
        if (this._doc.studies[i].dataValues) {
          this._doc.studies[i] = this._doc.studies[i].dataValues;
        }
      }
      return this;
    })
    .catch(err => console.error(err));
};
const unSQL = function(next) {
  let studiesArray = this._update.studies || [];
  studiesArray.forEach((study, index) => {
    if (typeof study == "object") {
      this._update.studies[index] = this._update.studies[index].id;
    }
  });
  next();
};

const autoPop = function(next) {
  this.populate("comments").populate("category");
  next();
};

CollectionSchema.pre("find", autoPop)
  .pre("findOne", autoPop)
  .pre("update", unSQL)
  .pre("findOneAndUpdate", unSQL);

CollectionSchema.post("find", async function(docs) {
  for (let i = 0; i < docs.length; i++) {
    try {
      await docs[i].sqlFind();
    } catch (e) {
      console.error(e);
    }
  }
  return docs;
}).post("findOne", async function(doc) {
  try {
    await doc.sqlFind();
  } catch (e) {
    console.error(e);
  }
  return doc;
});
let Collection = mongoose.model("Collection", CollectionSchema);

module.exports = Collection;
