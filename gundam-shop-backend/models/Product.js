const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, unique: true },
  brand: { type: String, default: "Bandai" },
  grade: { 
    type: String, 
    enum: ["HG", "RG", "MG", "PG", "SD"],
    required: true
  },
  scale: String, // 1/144, 1/100
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  images: [String],
  description: String,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);
