var express = require('express')
var router = express.Router()
const getRequest = require('../utils/request')
const network = require('../utils/network')

function makeRequest(uri, res) {
  try {
    const apiUrl = `${network.urls.menuApi}${uri}`
    getRequest(apiUrl, res)
  } catch(error) {
    console.log('makeRequest Error: ' + error)
    res.status(500).json({
      'title': 'makeRequest Failure',
      'status': 500
    })
  }
}

router.get('/categories', function (req, res, next) {
  const uri = `/v1/menu?location=beantown`
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
