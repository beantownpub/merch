var express = require('express')
var router = express.Router()
var config = require('./config.json')
var sections = config.sections
const axios = require('axios')

var jalVersion = (process.env.JAL_VERSION) ? process.env.JAL_VERSION : 'unset'

router.get('/items', function(req, res, next) {
  const merch = sections['merch']
  res.set('x-jalv', jalVersion)
  res.set('Cookie', req.cookies.cart)
  res.cookie('cart', req.cookies.cart).render(merch.template, merch.metadata);
})

const API_USERNAME = process.env.API_USERNAME
const API_PASSWORD = process.env.API_PASSWORD
const AUTH = 'Basic ' + Buffer.from(API_USERNAME + ':' + API_PASSWORD).toString('base64')
const HEADERS = {'Content-Type': 'application/json', 'Authorization': AUTH}

router.post('/send-message', function (req, res, next) {
  console.log(req.body)
  try {
    const host = process.env.CONTACT_API_HOST
    const protocol = process.env.CONTACT_API_PROTOCOL || 'https'
    const api_url = `${protocol}://${host}/v1/contact/beantown`

    axios({
      method: 'post',
      url: api_url,
      data: req.body,
      headers: HEADERS
    })
      .then(response => {
        if (response.status === 200) {
          console.log(response.data)
          res.status(200).json({
            'status': 200,
            'msg': 'Request Received! We will respond to you as soon as we can. Thanks!'
          })
        } else {
          res.status(500).json({
            'status': 500,
            'message': 'Contact API Error'
          })
        }
        res.end()
      })
      .catch(error => {
        console.error('AXIOS Error: ' + error)
        res.status(500).json({
          'title': 'Contact Failure',
          'status': 500
        })
      })
  } catch(error) {
    console.log('AUTH Error: ' + error)
    res.status(500).json({
      'title': 'Contact auth Failure',
      'status': 500
    })
  }
})

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
