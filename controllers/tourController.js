// controllers/tourController.js
const Tour = require('../models/tourModel')

// GET /tours
const getAllTours = (req, res) => {
  res.json(Tour.getAll())
}

// POST /tours
const createTour = (req, res) => {
  const {
    name,
    info,
    image,
    price,
    duration,
    groupSize,
    rating,
    availability,
  } = req.body
  const newTour = Tour.addOne(
    name,
    info,
    image,
    price,
    duration,
    groupSize,
    rating,
    availability
  )

  if (newTour) {
    res.status(201).json(newTour) // 201 Created
  } else {
    res
      .status(400)
      .json({ message: 'Failed to create tour. Missing required fields.' })
  }
}

const getTourById = (req, res) => {
  const tourId = req.params.tourId
  const tour = Tour.findById(tourId)
  if (tour) {
    res.json(tour)
  } else {
    res.status(404).json({ message: 'Tour not found' })
  }
}

const updateTour = (req, res) => {
  const tourId = req.params.tourId
  const updatedData = req.body
  const updatedTour = Tour.updateOneById(tourId, updatedData)
  if (updatedTour) {
    res.json(updatedTour)
  } else {
    res.status(404).json({ message: 'Tour not found' })
  }
}

const deleteTour = (req, res) => {
  const tourId = req.params.tourId
  const isDeleted = Tour.deleteOneById(tourId)
  if (isDeleted) {
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Tour not found' })
  }
}

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
}
