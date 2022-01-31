var express = require('express')
var router = express.Router()
var config = require('../utils/config.json')
var pages = config.pages

router.use(function (req, res, next) {
  next()
})

router.get('/', function(req, res, next) {
  console.log(`[GET] Index | Path: ${req.path}`)
  const home = pages.index
  res.render("main", home.metadata)
})

router.get('/healthz', function(req, res, next) {
  console.log(`[GET] Health | ${req.path}`)
  res.sendStatus('ok')
})

router.get('/favicon.ico', function(req, res, next) {
  console.log(`[GET] Favicon | Req: ${req}`)
  res.sendStatus(404)
})

router.get('/:section', function(req, res, next) {
  console.log(`Section: /${req.params['section']}`)
  const page = pages[req.params['section']]
  res.render("main", page.metadata)
})

router.get('/square', function(req, res, next) {
  const square = pages['square']
  // res.set('Cookie', req.cookies.cart)
  // res.cookie('cart', req.cookies.cart).render(merch.template, merch.metadata);
  res.render("main", square.metadata);
})


module.exports = router
