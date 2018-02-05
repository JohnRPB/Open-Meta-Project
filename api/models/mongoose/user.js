const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  email: String,
  passHash: String,
  analyses: [{ type: Schema.Types.ObjectId, ref: "Analysis" }],
  profile: { type: Schema.Types.ObjectId, ref: "Profile" }
});

let User = mongoose.model("User", UserSchema);

module.exports = User;
