const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
    totalPrice: Number,
    status: {
      type: String,
      enum: ["pending", "shipping", "done", "cancel"],
      default: "pending",
    },
    shippingAddress: String,
    paymentMethod: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Order", OrderSchema);
