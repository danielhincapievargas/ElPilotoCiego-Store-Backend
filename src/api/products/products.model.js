const { Schema, model } = require('mongoose');

const productsSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
    },
    productImage: String,
    productType: {
      type: String,
      required: true,
      enum: ['Tee', 'Hoodie', 'Cap', 'CD', 'LP', 'Accesory', 'Other' ],
    },
    productStock: {
      type: Number,
      required: true,
    },
    productSizes: {
      type: [{
        size: {
          type: String,
          enum: ['S', 'M', 'L', 'XL'],
        },
        stock: {
          type: Number,
        },
      }],
      validate: {
        validator: function () {
          return (this.productType === 'Tee' || this.productType === 'Hoodie') ? this.productSizes.length > 0 : true;
        },
        message: 'El campo "productSizes" es requerido para camisetas y debe contener al menos una talla y su stock.',
      },
    },
    productFeatured: {
      type: Boolean,
      default: false,
    },
    orders: {
      type: [{ type: Schema.Types.ObjectId, ref: 'orders' }],
      required: false,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Products = model('products', productsSchema)

module.exports = Products

/* {
  "productName": "Camiseta de algodón",
  "productPrice": 3000,
  "productImage": "url_de_la_imagen.jpg",
  "productType": "Tee",
  "productStock": 20,
  "productSizes": [
    {
      "size": "M",
      "stock": 20
    },
    {
      "size": "S",
      "stock": 10
    }
  ],
  "productFeatured": false
} */
