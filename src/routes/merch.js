var express = require('express')
var router = express.Router()
var config = require('./config.json')
var sections = config.sections

var jalVersion = (process.env.JAL_VERSION) ? process.env.JAL_VERSION : 'unset'

router.get('/items', function(req, res, next) {
  const merch = sections['merch']
  console.log(req.cookies)
  res.set('x-jalv', jalVersion)
  res.set('Cookie', req.cookies.cart)
  res.cookie('cart', req.cookies.cart).render(merch.template, merch.metadata);
})

router.get('/admin', function(req, res, next) {
  const merch = sections['admin']
  console.log(req.cookies)
  res.set('x-jalv', jalVersion)
  res.set('Cookie', req.cookies.cart)
  res.cookie('cart', req.cookies.cart).render(merch.template, merch.metadata);
})

module.exports = router
