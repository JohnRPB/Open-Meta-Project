const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  email: String,
  passHash: String,
  analyses: [Schema.Types.ObjectId],
  profile: Schema.Types.ObjectId
});

let User = mongoose.model("User", UserSchema);

module.exports = User;
