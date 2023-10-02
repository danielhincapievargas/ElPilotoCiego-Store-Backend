const router = require('express').Router();
const { 
  createProductController,
  listProductsController,
  getProductByIdController,
  updateProductController,
  deleteProductController
} = require('./products.controller');


router.route('/').post(createProductController)
router.route('/').get(listProductsController)
router.route('/:id').get(getProductByIdController)
router.route('/:id').put(updateProductController)
router.route('/:id').delete(deleteProductController)

module.exports = router;