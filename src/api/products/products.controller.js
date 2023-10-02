const { 
  createProduct,
  listProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require('./products.service')

const createProductController = async (req, res) => {
  try {

    const {
      productName,
      productPrice,
      productImage,
      productStock,
      productType,
      productSizes,
      productFeatured
      } = req.body

      const newProduct = {
        productName,
        productPrice,
        productImage,
        productStock,
        productType,
        productSizes,
        productFeatured
      }

    const product = await createProduct(newProduct)

    res.status(201).json({ message: 'Product created successfully', data: product })
  } catch(error) {
    res.status(400).json({ message: 'Product could not be created.', data: error.message })
  }

}

const listProductsController = async (req, res) => {
  try {

    const products = await listProducts()

    res.status(200).json({ message: 'Products listed.', data: products })
  } catch(error) {
    res.status(400).json({ message: 'Products could not be listed.', data: error.message })
  }
}

const getProductByIdController = async (req, res) => {
  try {
    const { id } = req.params
    const product = await getProductById(id)
    res.status(200).json({ message: 'Product found.', data: product })
  } catch (error) {
    res.status(400).json({ message: 'Product could not be found.', data: error.message })
  }
}

const updateProductController= async (req, res) => {
  try { 
    const { id } = req.params
    const data = req.body

    const updatedProduct = await updateProduct(id, data)

    res.status(200).json({ message: 'Product updated.', data: updatedProduct })
  } catch (error) {
    res.status(400).json({ message: 'Product could not be updated.', data: error.message })
  }
}

const deleteProductController= async (req, res) => {
  try { 
    const { id } = req.params


    const deletedProduct = await deleteProduct(id)

    res.status(200).json({ message: 'Product deleted.', data: deletedProduct })
  } catch (error) {
    res.status(400).json({ message: 'Product could not be deleted.', data: error.message })
  }
}

module.exports = {
  createProductController,
  listProductsController,
  getProductByIdController,
  updateProductController,
  deleteProductController
}