const router = require('express').Router();
const { handleCheckout } = require('./checkout.controller')

router.route('/').post(handleCheckout)

module.exports = router;

