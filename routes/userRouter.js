const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
router.use(auth)
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController')

router.get('/', getAllUsers)
router.post('/', createUser)
router.get('/:userId', getUserById)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)

module.exports = router
