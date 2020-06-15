var express = require('express')
var router = express.Router()
var config = require('./config.json')
var sections = config.sections

var jalVersion = (process.env.JAL_VERSION) ? process.env.JAL_VERSION : 'unset'

router.get('/items', function(req, res, next) {
  const merch = sections['merch']
  res.set('x-jalv', jalVersion)
  res.set('Cookie', req.cookies.cart)
  res.cookie('cart', req.cookies.cart).render(merch.template, merch.metadata);
})

router.get('/merch', function(req, res, next) {
  const merch = sections['merch']
  res.set('x-jalv', jalVersion)
  res.set('Cookie', req.cookies.cart)
  res.cookie('cart', req.cookies.cart).render(merch.template, merch.metadata);
})

router.get('/admin', function(req, res, next) {
  const merch = sections['admin']
  res.set('x-jalv', jalVersion)
  res.set('Cookie', req.cookies.cart)
  res.cookie('cart', req.cookies.cart).render(merch.template, merch.metadata);
})

// TODO fix routing so these routes aren't needed

router.get('/about', function(req, res, next) {
  res.redirect('/about')
})

router.get('/menu', function(req, res, next) {
  res.redirect('/menu')
})

router.get('/parties', function(req, res, next) {
  res.redirect('/parties')
})

router.get('/contact', function(req, res, next) {
  res.redirect('/contact')
})

module.exports = router
