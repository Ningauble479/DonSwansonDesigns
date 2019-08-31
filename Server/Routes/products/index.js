var express = require('express')
var routes = express.Router()
var AP = require('./AddProduct')

routes.post('/AddProduct', AP)



module.exports = routes;