const { getUserByEmail } = require('../../api/users/users.service');
const { comparePassword } = require('../utils/bcrypt');
const { signToken } = require('../auth.service'); 

const loginHandler = async (req, res) => {
  const { userEmail, userPassword } = req.body;

  try {
    const user = await getUserByEmail(userEmail);
    console.log(user.userEmail);

    if(!user) {
      return res.status(401).send('Invalid credentials');
    }

    // Compare password
    const isMatch = await comparePassword(userPassword, user.userPassword)
    
    if(!isMatch) {
      return res.status(401).send('Invalid credentials');
    }

    // JWT
    const payload = {
      id: user._id,
      email: user.userEmail,
    }
    const token = signToken(payload)


    const profile = {
      userFirstName: user.userFirstName,
      userLastName: user.userLastName,
      userEmail: user.userEmail,
      userRole: user.userRole
    }

    return res.status(200).json({ token, profile })

  } catch(error) {}
}

module.exports = {
  loginHandler
}