const router = require('express').Router();
const {
  userCreateController,
  getUsersController,
  deleteUserController
} = require('./users.controller');

router.route('/').post(userCreateController);
router.route('/').get(getUsersController);
router.route('/').delete(deleteUserController);


module.exports = router;