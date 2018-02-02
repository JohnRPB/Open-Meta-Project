const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProfileSchema = new Schema({
  f_name: String,
  l_name: String,
  title: String,
  organization: String,
  description: String,
  image: String
  // reviews: [Schema.Types.ObjectId],
  // papers: [Schema.Types.ObjectId],
});

let Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
