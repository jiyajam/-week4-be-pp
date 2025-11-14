const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
router.use(auth)
const {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
} = require('../controllers/tourController')

router.get('/', getAllTours) // GET /tours
router.post('/', createTour) // POST /tours
router.get('/:tourId', getTourById) // GET /tours/:tourId
router.put('/:tourId', updateTour) // PUT /tours/:tourId
router.delete('/:tourId', deleteTour) // DELETE /tours/:tourId

module.exports = router
