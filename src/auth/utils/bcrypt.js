const bcrypt = require('bcrypt');


const hashPassword = async (password, factor) => {
  // 1. salt
  const salt = await bcrypt.genSalt(factor)

  // 2. hash
  return await bcrypt.hash(password, salt)
}

const comparePassword = async (
  password,
  hashedPassword
) => {
  return await bcrypt.compare(password, hashedPassword);
}

module.exports = {
  hashPassword,
  comparePassword 
}