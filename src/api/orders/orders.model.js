const { Schema, model } = require('mongoose');

const ordersSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  orderStatus: {
    type: String,
    enum: ['Pending', 'In Process', 'Sent', 'Delivered']
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
}, {
  timestamps: true,
  versionKey: false,
})

const Orders = model('orders', ordersSchema)

module.exports = Orders