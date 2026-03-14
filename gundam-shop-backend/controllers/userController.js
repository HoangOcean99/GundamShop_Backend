const userService = require('../services/userService')

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createUser = async (req, res) => {
    try {
        const userData = { ...req.body, firebaseId: req.user.uid };
        const user = await userService.createUser(userData);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const loginOrRegister = async (req, res) => {
    try {
        const firebaseId = req.user.uid;
        const email = req.user.email;
        const name = req.user.name || req.user.displayName || 'Unknown';

        let user = await userService.getUserByFirebaseId(firebaseId);
        if (!user) {
            const userData = {
                firebaseId,
                email,
                name,
                role: 'user'
            };
            user = await userService.createUser(userData);
        }
        res.json({ user, message: 'Login successful' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser, loginOrRegister };