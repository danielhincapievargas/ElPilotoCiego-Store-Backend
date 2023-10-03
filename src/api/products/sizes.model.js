const { Schema, model } = require('mongoose');

const sizeSchema = new Schema(
  {
    size: {
      type: String,
      enum: ['S', 'M', 'L', 'XL'],
    },
    stock: {
      type: Number,
    },
  },
  /* {
    _id: false, // Esto evita que se genere un ID para cada talla
  } */
);

const Size = model('Size', sizeSchema);

module.exports = Size;
