var express = require('express')
var router = express.Router()
var config = require('../utils/config.json')
var pages = config.pages

router.use(function (req, res, next) {
  next()
})

router.get('/', function(req, res, next) {
  // console.log(req)
  const home = pages.index
  res.render("main", home.metadata)
})

router.get('/healthz', function(req, res, next) {
  console.log(`[GET] Health | ${req.path}`)
  res.sendStatus('ok')
})

router.get('/favicon.ico', function(req, res, next) {
  res.sendStatus(404)
})

router.get('/:section', function(req, res, next) {
  console.log(`Section: /${req.params['section']}`)
  const page = pages[req.params['section']]
  res.render("main", page.metadata)
})

module.exports = router
