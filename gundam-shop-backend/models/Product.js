const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    code: { type: String, unique: true },
    brand: { type: String, default: "Bandai" },
    mainCategory: {
      type: String,
      enum: ["Gundam Nhật Bản", "Gundam Trung Quốc"],
      required: true,
    },
    subCategory: {
      type: String,
      enum: [
        "HG",
        "RG",
        "MG",
        "PG",
        "SD",
        "1/144",
        "1/100",
        "1/60",
        "Original Mecha",
      ],
      required: true,
    },
    scale: String, // 1/144, 1/100
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    images: [String],
    description: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  { timestamps: true },
);

// Custom validation to ensure correct subCategory for each mainCategory
ProductSchema.pre("validate", function (next) {
  const jpCategories = ["HG", "RG", "MG", "PG", "SD"];
  const cnCategories = ["1/144", "1/100", "1/60", "Original Mecha"];

  if (
    this.mainCategory === "Gundam Nhật Bản" &&
    !jpCategories.includes(this.subCategory)
  ) {
    this.invalidate(
      "subCategory",
      "Danh mục con không hợp lệ cho Gundam Nhật Bản.",
    );
  }
  if (
    this.mainCategory === "Gundam Trung Quốc" &&
    !cnCategories.includes(this.subCategory)
  ) {
    this.invalidate(
      "subCategory",
      "Danh mục con không hợp lệ cho Gundam Trung Quốc.",
    );
  }
  next();
});

module.exports = mongoose.model("Product", ProductSchema);
