const Users = require('./users.model')
const { hashPassword } = require('../../auth/utils/bcrypt')

const createUser = async (input) => {

  const hashedPassword = await hashPassword(input.userPassword);

  const data = {
    ...input,
    userPassword: hashedPassword
  }

  try{
    const user = await Users.create(data)
    return user
  } catch (error) {
    throw new Error(error)
  }
}

const getUsers = async () => {
  try{
    const users = await Users.find()
    .select('userFirstName userLastName userEmail userPassword orders -_id')
    .populate({
      path: 'orders',
      select: 'orderProducts'
    })
    return users
  } catch (error) {
    throw new Error(error)
  }
}

const getUserByEmail = async (userEmail) => {
  try {
    const user = await Users.findOne({ userEmail })
    return user
  } catch (error) {
    throw new Error(error)
  }
}

const deleteUser = async (userEmail) => {
  try {
    const deletedUser = await Users.findOneAndDelete({ userEmail })
    return deletedUser
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserByEmail,
  deleteUser
}