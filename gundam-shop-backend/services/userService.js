const User = require('../models/User');

const getUsers = async () => {
    return await User.find();
}

const getUserById = async (id) => {
    return await User.findById(id);
}

const getUserByFirebaseId = async (firebaseId) => {
    return await User.findOne({ firebaseId });
}

const createUser = async (data) => {
    const user = new User(data);
    return await user.save();
}

const updateUser = async (id, data) => {
    return await User.findByIdAndUpdate(id, data, { new: true });
}

const deleteUser = async (id) => {
    return await User.findByIdAndDelete(id);
}

module.exports = { getUsers, getUserById, getUserByFirebaseId, createUser, updateUser, deleteUser };