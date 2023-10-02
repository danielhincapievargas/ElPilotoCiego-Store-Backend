const Products = require('./products.model')

const createProduct = async (data) => {
  try{
      const product = await Products.create(data)
      return product
  } catch (error) {
    throw new Error(error)
  }
}

const listProducts = async () => {
  try{
      const products = await Products.find()
      return products
  } catch (error) {
    throw new Error(error)
  }
}

const getProductById = async (id) => {
  try {
    const product = await Products.findById(id)
    return product
  } catch (error) {
    throw new Error(error)
  }
}

const updateProduct = async (id, data) => {
  try {
    const updatedProduct = await Products.findByIdAndUpdate(id, data, {new: true})
    return updatedProduct
  } catch (error) {
    throw new Error(error)
  }
}

const deleteProduct = async (id) => {
  try {
    const deletedProduct = await Products.findByIdAndDelete(id)
    return deletedProduct
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  createProduct,
  listProducts,
  getProductById,
  updateProduct,
  deleteProduct
}