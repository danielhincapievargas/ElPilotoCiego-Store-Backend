const {
  createUser,
  getUsers,
  deleteUser
} = require('./users.service')

const userCreateController = async (req, res) =>  {
  try {
    const data = req.body

    const user = await createUser(data)

    res.status(201).json({ message: 'User created', data: user })
  } catch(error) {
    res.status(400).json({ message: 'Error creating user', error: error.message })
  }
}

const getUsersController = async (req, res) =>  {
  try {

    const user = await getUsers()

    res.status(201).json({ message: 'Users found.', data: user })
  } catch(error) {
    res.status(400).json({ message: 'Error getting users.', error: error.message })
  }
}

const deleteUserController = async (req, res) => {

  try{
    const { userEmail } = req.body

  const user = await deleteUser(userEmail)

  res.status(201).json({ message: 'User deleted.', data: user })
  } catch (error){
    res.status(400).json({ message: 'Error deleting user.', error: error.message })
  }
}

module.exports = {
  userCreateController,
  getUsersController,
  deleteUserController
}