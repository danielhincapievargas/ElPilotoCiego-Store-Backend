const Orders = require('./orders.model')

const createOrder = async (data) => {
  try{
      const product = await Orders.create(data)
      return product
  } catch (error) {
    throw new Error(error)
  }
}
const getOrders = async () => {
  try{
      const order = await Orders.find()
      return order
  } catch (error) {
    throw new Error(error)
  }
}

const getOrderById = async (id) => {
  try{
    const order = await Orders.findById(id)
    return order
  } catch (error) {
    throw new Error(error)
  }
}

const updateOrder = async (id, data) => {
  try {
    const updatedOrder = await Orders.findByIdAndUpdate(id, data, {new: true})
    return updatedOrder
  } catch (error) {
    throw new Error(error)
  }
}

const deleteOrder = async (id) => {
  try {
    const deletedOrder = await Orders.findByIdAndDelete(id)
    return deletedOrder
  } catch (error) {
    throw new Error(error)
  }
}


module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder
}