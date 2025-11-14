// controllers/userController.js
const User = require('../models/userModel')

// GET /users
const getAllUsers = (req, res) => {
  res.json(User.getAll())
}

// POST /users
const createUser = (req, res) => {
  const {
    name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    membership_status,
    account_verified,
    country,
  } = req.body
  const newUser = User.addOne(
    name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    membership_status,
    account_verified,
    country,
  )

  if (newUser) {
    res.status(201).json(newUser) // 201 Created
  } else {
    res
      .status(400)
      .json({ message: 'Failed to create user. Missing required fields.' })
  }
}

const getUserById = (req, res) => {
  const userId = req.params.userId
  const user = User.findById(userId)
  if (user) {
    res.json(user)
  } else {
    res.status(404).json({ message: 'User not found' })
  }
}

const updateUser = (req, res) => {
  const userId = req.params.tourId
  const updatedData = req.body
  const updatedUser = User.updateOneById(userId, updatedData)
  if (updatedUser) {
    res.json(updatedUser)
  } else {
    res.status(404).json({ message: 'User not found' })
  }
}

const deleteUser = (req, res) => {
  const userId = req.params.userId
  const isDeleted = User.deleteOneById(userId)
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'User not found' })
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
