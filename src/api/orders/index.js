const router = require('express').Router();
const { 
  createOrderController,
  getOrdersController,
  getOrderByIdController,
  updateOrderController,
  deleteOrderController
} = require('./orders.controller');


router.route('/').post(createOrderController)
router.route('/').get(getOrdersController)
router.route('/:id').get(getOrderByIdController)
router.route('/:id').put(updateOrderController)
router.route('/:id').delete(deleteOrderController)

module.exports = router;