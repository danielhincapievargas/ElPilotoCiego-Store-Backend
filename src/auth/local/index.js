const { Router } = require('express')

const { loginHandler } = require('./local.controller')

const route = Router()

//login -> POST /auth/local/login
route.post('/login', loginHandler)

//change password
//reset password
//active account
//louout


module.exports = route