const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
});

const UserModel = new mongoose.model("newUser", UserSchema);

module.exports = UserModel;
