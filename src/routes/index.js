var express = require('express')
var router = express.Router()
var config = require('./config.json')
var sections = config.sections

router.use(function (req, res, next) {
  next()
})

router.get('/', function(req, res, next) {
  const home = sections.home
  res.render(home.template, home.metadata)
})

router.get('/:section', function(req, res, next) {
  const page = sections[req.params['section']]
  res.render(page.template, page.metadata)
})

router.get('/square', function(req, res, next) {
  const square = sections['square']
  // res.set('Cookie', req.cookies.cart)
  // res.cookie('cart', req.cookies.cart).render(merch.template, merch.metadata);
  res.render(square.template, square.metadata);
})

module.exports = router
