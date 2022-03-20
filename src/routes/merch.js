var express = require('express')
var router = express.Router()
const squareConnect = require('square-connect')
const squareUtils = require('../utils/square')
const network = require('../utils/network')
const request = require("../utils/axios")
var config = require('../utils/config.json')
var pages = config.pages
const kafka = require('../utils/kafka')

const producer = kafka.producer()

async function foo() {
  console.log('Runnning foo')
  try {
    await producer.connect()
    const responses = await producer.send({
      topic: 'clicks',
      messages: [{
        // Name of the published package as key, to make sure that we process events in order
        key: 'foo',

        // The message value is just bytes to Kafka, so we need to serialize our JavaScript
        // object to a JSON string. Other serialization methods like Avro are available.
        value: JSON.stringify({
          package: 'foo',
          version: 'bar'
        })
      }]
    })
    console.log('Published message', { responses })
  } catch (error) {
    console.error('Error publishing message', error)
  }
}

router.get('/items', function(req, res, next) {
  foo()
  const merch = pages['merch']
  res.render("main", merch.metadata)
})

router.get('/merch', function(req, res, next) {
  const merch = pages['merch']
  res.render(merch.template, merch.metadata);
})

const defaultClient = squareConnect.ApiClient.instance
const oauth2 = defaultClient.authentications['oauth2']
oauth2.accessToken = squareUtils.accessToken
defaultClient.basePath = squareUtils.url

router.post('/process-payment', async (req, res) => {
  // Charge customer's card via Square API
  console.log('POST process-payment')
  const paymentsApi = new squareConnect.PaymentsApi()
  const requestBody = squareUtils.squareRequestBody(req.body)
  try {
    const response = await paymentsApi.createPayment(requestBody);
    res.status(200).json({
      'title': 'Payment Successful',
      'result': response
    });
  } catch(error) {
    console.error('ERROR /process-payment')
    console.error(requestBody)
    // let msg = JSON.parse(error.response.text)
    // let body = {
    //   channel: "#test-notifications",
    //   message: msg
    // }
    // let contactUrl = "http://contact-api:5012/v1/contact/slack"
    // let options = {method: "POST", credentials: "include", body: JSON.stringify(body), url: contactUrl}
    // console.log(options)
    // const notify = await request.slackRequest(options)
    // console.log(notify)
    res.status(500).json({
      'title': 'Payment Failure',
      'result': error.response.text
    })
  }
})

function sendRequest(options, cookie, res) {
  try {
    request.cartRequest(options, cookie, res)
  } catch(error) {
    console.log('Request Error: ' + error)
    res.status(500).json({
      'title': 'Request Failure',
      'status': 500
    })
  }
}

router.post('/process-order', function (req, res, next) {
  console.log("POST /process-order")
  console.log(req.body["order"])
  const apiUrl = `${network.urls.merchApi}/v1/merch/orders?location=beantown`
  const options = {
    url: apiUrl,
    method: 'post',
    data: req.body
  }
  sendRequest(options, req.cookies.cartId, res)
})

router.get('/cart', function (req, res, next) {
  if (!req.sessionID) {
    req.session.regenerate(function(err) {
      console.log(`Generating session ${err}`)
    })
  }
  const apiUrl = `${network.urls.merchApi}/v1/merch/cart`
  const options = {
    url: apiUrl,
    method: 'get'
  }
  sendRequest(options, req.sessionID, res)
})

router.post('/cart', function (req, res, next) {
  // console.log(req.cookie)
  const apiUrl = `${network.urls.merchApi}/v1/merch/cart`
  // console.log(`Post Cart Session ID: ${req.sessionID}`)
  if (!req.sessionID) {
    // console.log('CART POST Generating new session')
    req.session.regenerate(function(err) {
      console.log(`POST /cart ${err}`)
    })
  }
  // console.log(`Post Cart Session ID: ${req.sessionID}`)
  const options = {
    url: apiUrl,
    method: 'post',
    data: req.body
  }
  sendRequest(options, req.sessionID, res)
})

router.delete('/cart', function (req, res, next) {
  const apiUrl = `${network.urls.merchApi}/v1/merch/cart`
  // console.log(`Cart | DELETE | URL | ${apiUrl}`)
  const options = {
    url: apiUrl,
    method: 'delete',
    data: req.body
  }
  sendRequest(options, req.sessionID, res)
})

router.delete('/cart/empty', function (req, res, next) {
  const cartId = req.body['id']
  const apiUrl = `${network.urls.merchApi}/v2/cart/empty?cart_id=${cartId}`
  // console.log(`Cart | DELETE | ID: ${cartId}`)
  const options = {
    url: apiUrl,
    method: 'delete'
  }
  sendRequest(options, req.sessionID, res)
})

router.get('/merchandise', function (req, res, next) {
  const apiUrl = `${network.urls.merchApi}/v2/merch?location=beantown`
  console.log('Merchandise | ' + apiUrl)
  const options = {
    url: apiUrl,
    method: 'get'
  }
  sendRequest(options, req.sessionID, res)
})

router.get('/:page', function(req, res, next) {
  res.redirect(`/${req.params['page']}`)
})

module.exports = router
