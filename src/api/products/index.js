const router = require('express').Router();
const { 
  createProductController,
  listProductsController,
  getProductByIdController,
  updateProductController,
  deleteProductController
} = require('./products.controller');
const formData = require('../middlewares/formData')


router.route('/').post(formData, createProductController)
router.route('/').get(listProductsController)
router.route('/:id').get(getProductByIdController)
router.route('/:id').put(formData, updateProductController)
router.route('/:id').delete(deleteProductController)

module.exports = router;