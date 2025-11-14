let userArray = []
let nextId = 1

// Get all users
const getAll = () => userArray

// Add a new user
const addOne = (
  name,
  email,
  password,
  phone_number,
  gender,
  date_of_birth,
  membership_status,
  account_verified,
  country
) => {
  if (
    !name ||
    !email ||
    !password ||
    !phone_number ||
    !gender ||
    !date_of_birth ||
    !account_verified ||
    !country
  ) {
    return false
  }

  const newUser = {
    id: nextId++,
    name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    account_verified,
    country,
  }

  userArray.push(newUser)
  return newUser
}

// Find user by ID
const findById = (id) => {
  const user = userArray.find((user) => user.id === Number(id))
  return user || false
}

// Update user by ID
const updateOneById = (id, updatedData) => {
  const user = findById(id)
  if (!user) return false

  // Only update fields that exist in updatedData
  Object.keys(updatedData).forEach((key) => {
    if (updatedData[key] !== undefined) {
      user[key] = updatedData[key]
    }
  })

  return user
}

// Delete user by ID
const deleteOneById = (id) => {
  const user = findById(id)
  if (!user) return false

  userArray = userArray.filter((user) => user.id !== Number(id))
  return true
}

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
}
