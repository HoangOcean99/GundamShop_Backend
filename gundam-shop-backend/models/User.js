const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firebaseId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false }, // Không cần password khi dùng Firebase Auth
  role: { type: String, enum: ["user", "admin"], default: "user" },
  phone: String,
  address: String
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
