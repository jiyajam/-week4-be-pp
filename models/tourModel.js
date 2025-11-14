let tourArray = []
let nextId = 1

// Get all tours
const getAll = () => tourArray

// Add a new tour
const addOne = (
  name,
  info,
  image,
  price,
  duration,
  groupSize,
  rating,
  availability
) => {
  if (
    !name ||
    !info ||
    !image ||
    !price ||
    !duration ||
    !groupSize ||
    rating === undefined ||
    availability === undefined
  ) {
    return false
  }

  const newTour = {
    id: nextId++,
    name,
    info,
    image,
    price,
    duration,
    groupSize,
    rating,
    availability,
  }

  tourArray.push(newTour)
  return newTour
}

// Find tour by ID
const findById = (id) => {
  const tour = tourArray.find((tour) => tour.id === Number(id))
  return tour || false
}

// Update tour by ID
const updateOneById = (id, updatedData) => {
  const tour = findById(id)
  if (!tour) return false

  // Only update fields that exist in updatedData
  Object.keys(updatedData).forEach((key) => {
    if (updatedData[key] !== undefined) {
      tour[key] = updatedData[key]
    }
  })

  return tour
}

// Delete tour by ID
const deleteOneById = (id) => {
  const tour = findById(id)
  if (!tour) return false

  tourArray = tourArray.filter((tour) => tour.id !== Number(id))
  return true
}

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
}
