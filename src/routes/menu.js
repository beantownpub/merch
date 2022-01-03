var express = require('express')
var router = express.Router()
const getRequest = require('../utils/request')

function makeRequest(uri, res) {
  try {
    const host = process.env.MENU_API_HOST
    const protocol = process.env.MENU_API_PROTOCOL || 'https'
    const apiUrl = `${protocol}://${host}${uri}`
    getRequest(apiUrl, res)
  } catch(error) {
    console.log('Request Error: ' + error)
    res.status(500).json({
      'title': 'Request Failure',
      'status': 500
    })
  }
}

router.get('/categories', function (req, res, next) {
  const uri = `/v1/menu?location=beantown`
  console.log(`CATEGORIES | GET | ${uri}`)
  makeRequest(uri, res)
})

router.get('/sides', function (req, res, next) {
  const uri = `/v1/menu?location=beantown`
  makeRequest(uri, res)
})

router.get('/:page', function(req, res, next) {
  res.redirect(`/${req.params['page']}`)
})

module.exports = router
