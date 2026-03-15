const Order = require("../models/Order");
const Product = require("../models/Product");

const getOrders = async () => {
  return await Order.find().populate("user").populate("items.product");
};

const getOrdersByUser = async (userId) => {
  return await Order.find({ user: userId })
    .populate("items.product")
    .sort({ createdAt: -1 });
};

const getOrderById = async (id) => {
  return await Order.findById(id).populate("user").populate("items.product");
};

const createOrder = async (data) => {
  // Deduct stock for each item
  for (const item of data.items) {
    const product = await Product.findById(item.product);
    if (!product) {
      throw new Error(`Product not found: ${item.name}`);
    }
    if (product.stock < item.quantity) {
      throw new Error(
        `Insufficient stock for ${product.name}. Available: ${product.stock}`,
      );
    }
    product.stock -= item.quantity;
    await product.save();
  }

  const order = new Order(data);
  return await order.save();
};

const updateOrder = async (id, data) => {
  return await Order.findByIdAndUpdate(id, data, { new: true })
    .populate("user")
    .populate("items.product");
};

const deleteOrder = async (id) => {
  return await Order.findByIdAndDelete(id);
};

module.exports = {
  getOrders,
  getOrdersByUser,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
