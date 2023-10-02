const { getUserByEmail } = require('../api/users/users.service');
const { verifyToken } = require('./auth.service');

const isAuthenticated = async (req, res, next) => {
  const token = req.headers?.authorization?.split(' ')[1];
  
  if(!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // Verify token
  const decoded = verifyToken(token)

  if(!decoded){
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const user = await getUserByEmail(decoded.email)

  req.user = user

  return next();
}

module.exports = {
  isAuthenticated
}