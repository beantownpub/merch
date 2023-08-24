import axios from 'axios'
import secret from './secrets.js'

const AUTH = 'Basic ' + Buffer.from(secret.api_user + ':' + secret.api_pass).toString('base64')
let HEADERS = {'Content-Type': 'application/json', 'Authorization': AUTH}
const OK_RESPONSES = Array.from({length: 300 - 200}, (v, k) => k + 200)

const RESPONSES = {
  apiError: {
    'status': 500,
    'message': 'Merch API Error'
  },
  axiosError: {
    'status': 500,
    'message': 'Axios Error'
  },
  authError: {
    'status': 500,
    'message': 'Auth Failure'
  }
}

function cartRequest(options, cartId, res) {
  HEADERS['Content-Type'] = 'application/json'
  // console.log(`Cart ID: ${cartId}`)
  if (cartId) {
    HEADERS['Cart-ID'] = cartId
  }
  options.headers = HEADERS
  // console.log(`makeRequest | METHOD: ${options.method} | URL | ${options.url}`)
  try {
    axios.default(options)
    .then(response => {
      // console.log(`makeRequest | Response: ${response.status}`)
      if (OK_RESPONSES.includes(response.status)) {
        res.status(200).json({'status': 200, 'data': response.data})
      } else {
        res.status(500).json(RESPONSES.apiError)
      }
      res.end()
    })
    .catch(error => {
      console.error('cartRequest Axios: ' + error)
      res.status(500).json(RESPONSES.axiosError)
    })
  } catch(error) {
    console.error('cartRequest Unknown Error: ' + error)
    res.status(500).json(RESPONSES.authError)
  }
}

function slackRequest(options) {
  HEADERS['Content-Type'] = 'application/json'
  options.headers = HEADERS
  console.log(`slackRequest | Body: ${options.body} | URL | ${options.url}`)
  try {
    axios(options)
    .then(response => {
      console.log(`makeRequest | Response: ${response.status}`)
      if (OK_RESPONSES.includes(response.status)) {
        response.status(200).json({'status': 200, 'data': response.data})
      } else {
        response.status(500).json(RESPONSES.apiError)
      }
      response.end()
    })
    .catch(error => {
        console.error('Slack AXIOS: ' + error)
    })
  } catch(error) {
    console.log('Slack Error: ' + error)
  }
}

export { cartRequest, slackRequest }
