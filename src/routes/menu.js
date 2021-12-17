var express = require('express')
var router = express.Router()
const axios = require('axios')
const getRequest = require('../utils/request')

var HEADERS = require('../utils/auth')

function makeRequest(endpoint, res) {
  try {
    const host = process.env.MENU_API_HOST
    const protocol = process.env.MENU_API_PROTOCOL || 'https'
    const apiUrl = `${protocol}://${host}/v1/menu/section/${endpoint}`
    getRequest(apiUrl, res)
  } catch(error) {
    console.log('Request Error: ' + error)
    res.status(500).json({
      'title': 'Request Failure',
      'status': 500
    })
  }
}

router.post('/categories', function (req, res, next) {
  makeRequest(req.body['category'], res)
})

router.get('/:page', function(req, res, next) {
  res.redirect(`/${req.params['page']}`)
})

module.exports = router
