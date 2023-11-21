const Stripe = require('stripe')

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
})

const handleCheckout = async (req, res) => {
  console.log(req);

  const {paymentMethod, amount} = req.body

  try{
    const { id } = paymentMethod

    const payment = await stripe.paymentIntents.create({
      payment_method: id,
      amount,
      currency: 'usd',
      confirm: true,
      description: 'Software development services provided',
      return_url: 'http://localhost:3000/successful_payment'
    })

    res.status(201).json({ message: 'Payment Successful', payment })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}


module.exports = { handleCheckout }