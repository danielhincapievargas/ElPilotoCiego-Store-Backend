const { Schema, model } = require('mongoose');

const ordersSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  orderStatus: {
    type: String,
    enum: ['Pending', 'In Process', 'Sent', 'Delivered'],
    default: 'Pending'
  },
  orderTotal: {
    type: Number,
    required: true,
  },
  orderProducts: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: 'products',
        required: true,
      },
      productSize: {
        type: String,
        enum: ['S', 'M', 'L', 'XL']
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  orderEmail: {
    type: String,
    required: true,
  },
  orderCountry: {
    type: String,
    required: true,
  },
  orderFirstName: {
    type: String,
    required: true,
  },
  orderLastName: {
    type: String,
    required: true,
  },
  orderAddress: {
    type: String,
    required: true,
  },
  orderCity: {
    type: String,
    required: true,
  },
  orderPostcode: {
    type: String
  },
  orderPhone: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
  versionKey: false,
})

const Orders = model('orders', ordersSchema)

module.exports = Orders