var express = require('express')
var router = express.Router()

var jalVersion = (process.env.JAL_VERSION) ? process.env.JAL_VERSION : 'unset'
var config = require('./config.json')
var sections = config.sections

router.use(function (req, res, next) {
  next()
})

router.get('/', function(req, res, next) {
  const home = sections.home
  res.set('x-jalv', jalVersion)
  res.render(home.template, home.metadata)
})

router.get('/about', function (req, res, next) {
  const about = sections.about
  res.render(about.template, about.metadata)
})

router.get('/menu', function (req, res, next) {
  const menu = sections.menu
  res.render(menu.template, menu.metadata)
})

router.get('/merch', function (req, res, next) {
  res.redirect('/merch/items')
})

router.get('/contact', function (req, res, next) {
  const contact = sections.contact
  res.render(contact.template, contact.metadata)
})

router.get('/parties', function (req, res, next) {
  const parties = sections.parties
  res.render(parties.template, parties.metadata)
})

module.exports = router
