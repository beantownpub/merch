var express = require('express')
var router = express.Router()
const squareConnect = require('square-connect')
const getRequest = require('../utils/request')
var config = require('./config.json')
var sections = config.sections

var HEADERS = require('../utils/auth')


function setCookie(res, req) {
  res.set('Cookie', req.cookies.cart)
  res.cookie('cart', req.cookies.cart)
}


// router.get('/:section', function(req, res, next) {
//   const merch = sections[req.params['section']]
//   setCookie(res, req).render(merch.template, merch.metadata)
// })

router.get('/items', function(req, res, next) {
  const merch = sections['merch']
  res.set('Cookie', req.cookies.cart)
  res.cookie('cart', req.cookies.cart).render(merch.template, merch.metadata);
})

router.get('/merch', function(req, res, next) {
  const merch = sections['merch']
  res.set('Cookie', req.cookies.cart)
  res.cookie('cart', req.cookies.cart).render(merch.template, merch.metadata);
})

router.get('/admin', function(req, res, next) {
  const merch = sections['admin']
  res.set('Cookie', req.cookies.cart)
  res.cookie('cart', req.cookies.cart).render(merch.template, merch.metadata);
})

const apiUser = process.env.API_USER
const apiPw = process.env.API_PASSWORD
const locationId = process.env.SQUARE_LOCATION_ID || 'BJKZX9JBKW67E'
const accessToken = process.env.SQAURE_ACCESS_TOKEN || 'EAAAEM0Rm1iVa_hMKSaQgaaCo594hlMl42540VCI6I7_Y-PENd9LlTI9gU3l6I2N'
const defaultClient = squareConnect.ApiClient.instance
const oauth2 = defaultClient.authentications['oauth2']
oauth2.accessToken = accessToken

defaultClient.basePath = 'https://connect.squareupsandbox.com'

router.post('/process-payment', async (req, res) => {
  const request_params = req.body;
  // Charge the customer's card
  const payments_api = new squareConnect.PaymentsApi()
  const request_body = {
    source_id: request_params.nonce,
    location_id: locationId,
    amount_money: {
      amount: request_params.total,
      currency: 'USD'
    },
    idempotency_key: request_params.idempotency_key
  }

  try {
    const response = await payments_api.createPayment(request_body);
    res.status(200).json({
      'title': 'Payment Successful',
      'result': response
    });
  } catch(error) {
    res.status(500).json({
      'title': 'Payment Failure',
      'result': error.response.text
    })
  }
})

function sendOrder(data) {
  console.log('Sending DATA')
  var http = require('http')
  var auth = 'Basic ' + Buffer.from(apiUser + ':' + apiPw).toString('base64')

  var options = {
    host: process.env.MERCH_API_HOST,
    path: '/v1/merch/orders',
    port: 5000,
    method: 'POST',
    headers: HEADERS
  }
  callback = function(response) {
    var str = ''
    response.on('data', function (chunk) {
      str += chunk;
    })

    response.on('end', function () {
      console.log(`END: ${str}`)
    })
  }
  try {
  var req = http.request(options, callback)
  req.write(JSON.stringify(data))
  req.end()
  } catch(err) {
    console.log(err)
  }
}

function makeRequest(endpoint, res) {
  try {
    const host = process.env.MERCH_API_HOST
    const protocol = process.env.MERCH_API_PROTOCOL || 'http'
    const apiUrl = `${protocol}://${host}/v1/merch/products/${endpoint}`
    getRequest(apiUrl, res)
  } catch(error) {
    console.log('Request Error: ' + error)
    res.status(500).json({
      'title': 'Request Failure',
      'status': 500
    })
  }
}

router.post('/process-order', async (req, res) => {
  console.log(req.body)
  try {
    const response = await sendOrder(req.body)
    res.status(200).json({
      'title': 'Payment Successful',
      'result': response
    });
  } catch(error) {
    res.status(500).json({
      'title': 'Payment Failure',
      'result': error.response.text
    })
  }
})

router.get('/categories/:category', function (req, res, next) {
  console.log('Category: ' + req.params['category'])
  makeRequest(req.params['category'], res)
})

router.get('/:page', function(req, res, next) {
  res.redirect(`/${req.params['page']}`)
})

module.exports = router
