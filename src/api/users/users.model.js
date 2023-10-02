const { Schema, model, models } = require('mongoose');

const emailRegex = new RegExp('[a-zA-Z0-9]{5,10}@[a-z]{3,10}.com')

const usersSchema = new Schema (
  {
    userFirstName: {
      type: String,
      required: [true, 'First Name is required'],
      minlength: [2, 'First Name must be at least 2 characters long'],
      maxlength: [15, 'First Name must be at most 15 characters long'],
    },
    userLastName: {
      type: String,
      required: [true, 'Last Name is required'],
      minlength: [2, 'Last Name must be at least 2 characters long'],
      maxlength: [15, 'Last Name must be at most 15 characters long'],
    },
    userEmail: {
      type: String,
      match: [emailRegex, 'Email is not valid'],
      validate: [{
        validator: async (value) => {
          try {
            const user = await models.users.findOne({ userEmail: value })
            return !user
          } catch(error) {
            return false
          }
        },
        message: 'Email already exists'
      }]
    },
    userPassword: {
      type: String,
    },
    userRole: {
      type: String,
      default: 'USER',
      enum: ['USER', 'ADMIN'],
    },
    orders: {
      type: [{ type: Schema.Types.ObjectId, ref: 'orders' }],
      required: false,
    }
  }, 
  {
    timestamps: true
})

const Users = model('users', usersSchema)

module.exports = Users