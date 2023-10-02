const Users = require('../users/users.model')
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder, 
  deleteOrder
} = require('./orders.service')

const createOrderController = async (req, res) =>  {
  try {
    const { authorization: userId } = req.headers
    const { orderStatus, orderProducts } = req.body

    const user = await Users.findById(userId)

    if(!user){
      throw new Error('User not found.')
    }

    const newOrder = {orderStatus, orderProducts, user: userId}

    const order = await createOrder(newOrder)
    user.orders.unshift(order)
    await user.save({ validateBeforeSave: false })

    res.status(201).json({ message: 'Order created', data: order })
  } catch(error) {
    res.status(400).json({ message: 'Error creating order', error: error.message })
  }
}

const getOrdersController = async (req, res) => {
  try {
    const orders = await getOrders()
    res.status(201).json({ message: 'Orders found.', data: orders })
  } catch(error) {
    res.status(400).json({ message: 'Error getting orders.', error: error.message })
  }
}

const getOrderByIdController = async (req, res) => {
  try {
    const { id } = req.params
    const order = await getOrderById(id)
    res.status(200).json({ message: 'Order found.', data: order })
  } catch (error) {
    res.status(400).json({ message: 'Order could not be found.', data: error.message })
  }
}

const updateOrderController = async (req, res) => {
  try { 
    const { id } = req.params
    const data = req.body

    const updatedProduct = await updateOrder(id, data)

    res.status(200).json({ message: 'Order updated.', data: updatedProduct })
  } catch (error) {
    res.status(400).json({ message: 'Order could not be updated.', data: error.message })
  }
}

const deleteOrderController= async (req, res) => {
  try { 
    const { id } = req.params

    const deletedProduct = await deleteOrder(id)

    res.status(200).json({ message: 'Order deleted.', data: deletedProduct })
  } catch (error) {
    res.status(400).json({ message: 'Order could not be deleted.', data: error.message })
  }
}

module.exports = {
  createOrderController,
  getOrdersController,
  getOrderByIdController,
  updateOrderController,
  deleteOrderController
}