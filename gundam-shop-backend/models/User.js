const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firebaseId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  phone: String,
  address: String
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
