var express = require('express')
var router = express.Router()
const squareConnect = require('square-connect')
const getRequest = require('../utils/request')
const squareUtils = require('../utils/square')
const network = require('../utils/network')
const request = require("../utils/axios")
var config = require('../utils/config.json')
var pages = config.pages

router.get('/items', function(req, res, next) {
  const merch = pages['merch']
  res.render("main", merch.metadata)
})

router.get('/foo', function(req, res, next) {
  const merch = pages['merch']
  res.render("main", merch.metadata)
})

router.get('/merch', function(req, res, next) {
  const merch = pages['merch']
  res.set('Cookie', req.cookies.cart)
  res.cookie('cart', req.cookies.cart).render(merch.template, merch.metadata);
})

const defaultClient = squareConnect.ApiClient.instance
const oauth2 = defaultClient.authentications['oauth2']
oauth2.accessToken = squareUtils.accessToken
defaultClient.basePath = squareUtils.url

router.post('/process-payment', async (req, res) => {
  const requestParams = req.body
  console.log(requestParams)
  console.log(`Square APP ID: ${process.env.SQUARE_APP_ID}`)
  console.log(`Square Location ID: ${process.env.SQUARE_LOCATION_ID}`)
  // Charge the customer's card
  const paymentsApi = new squareConnect.PaymentsApi()
  const requestBody = squareUtils.squareRequestBody(requestParams)
  try {
    const response = await paymentsApi.createPayment(requestBody);
    res.status(200).json({
      'title': 'Payment Successful',
      'result': response
    });
  } catch(error) {
    console.log(error.response.text)
    res.status(500).json({
      'title': 'Payment Failure',
      'result': error.response.text
    })
  }
})

function sendRequest(options, cookie, res) {
  try {
    request(options, cookie, res)
  } catch(error) {
    console.log('Request Error: ' + error)
    res.status(500).json({
      'title': 'Request Failure',
      'status': 500
    })
  }
}

function makeRequest(endpoint, res) {
  try {
    const apiUrl = `${network.urls.merchApi}/v1/merch/products/${endpoint}`
    getRequest(apiUrl, res)
  } catch(error) {
    console.log('Request Error: ' + error)
    res.status(500).json({
      'title': 'Request Failure',
      'status': 500
    })
  }
}

router.post('/process-order', function (req, res, next) {
  console.log(`Processing order: ${Object.keys(req.body)}`)
  const apiUrl = `${network.urls.merchApi}/v1/merch/orders`
  console.log(`ITEMS | POST | Path: ${req.path}`)
  const options = {
    url: apiUrl,
    method: 'post',
    data: req.body
  }
  sendRequest(options, req.cookies.cartId, res)
})

router.get('/cart', function (req, res, next) {
  console.log(req.cookie)
  const apiUrl = `${network.urls.merchApi}/v1/merch/cart`
  console.log(`Cart | GET | URL | ${apiUrl}`)
  const options = {
    url: apiUrl,
    method: 'get'
  }
  sendRequest(options, req.cookies.cartId, res)
})

router.post('/cart', function (req, res, next) {
  const apiUrl = `${network.urls.merchApi}/v1/merch/cart`
  console.log(`Cart | POST | URL | ${apiUrl} | ID | ${req.cookies.cartId}`)
  console.log(req.body)
  const options = {
    url: apiUrl,
    method: 'post',
    data: req.body
  }
  sendRequest(options, req.cookies.cartId, res)
})

router.delete('/cart', function (req, res, next) {
  const apiUrl = `${network.urls.merchApi}/v1/merch/cart`
  console.log(`Cart | DELETE | URL | ${apiUrl}`)
  const options = {
    url: apiUrl,
    method: 'delete',
    data: req.body
  }
  sendRequest(options, req.cookies.cartId, res)
})

router.delete('/cart/empty', function (req, res, next) {
  const cartId = req.body['id']
  const apiUrl = `${network.urls.merchApi}/v2/cart/empty?cart_id=${cartId}`
  console.log(`Cart | DELETE | ID: ${cartId}`)
  const options = {
    url: apiUrl,
    method: 'delete'
  }
  sendRequest(options, req.cookies.cartId, res)
})

router.get('/merchandise', function (req, res, next) {
  const apiUrl = `${network.urls.merchApi}/v2/merch`
  console.log('Merchandise | ' + apiUrl)
  const options = {
    url: apiUrl,
    method: 'get'
  }
  sendRequest(options, req.cookies.cartId, res)
})

router.get('/categories/:category', function (req, res, next) {
  console.log('Category: ' + req.params['category'])
  makeRequest(req.params['category'], res)
})

router.get('/:page', function(req, res, next) {
  res.redirect(`/${req.params['page']}`)
})

module.exports = router
