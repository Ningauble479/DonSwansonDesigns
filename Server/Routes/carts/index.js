var express = require('express')
var routes = express.Router()
var CC = require('./CheckCart')

routes.post('/CheckCart', CC)



module.exports = routes;