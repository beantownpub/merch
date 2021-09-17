var express = require('express')
var router = express.Router()
const axios = require('axios')

const API_USERNAME = process.env.API_USERNAME
const API_PASSWORD = process.env.API_PASSWORD
const AUTH = 'Basic ' + Buffer.from(API_USERNAME + ':' + API_PASSWORD).toString('base64')
const HEADERS = {'Content-Type': 'application/json', 'Authorization': AUTH}

function makeRequest(endpoint, res) {
  try {
    const host = process.env.MENU_API_HOST
    const protocol = process.env.MENU_API_PROTOCOL || 'https'
    const api_url = `${protocol}://${host}/v1/menu/section/${endpoint}`
    axios({
      method: 'get',
      url: api_url,
      headers: HEADERS
    })
      .then(response => {
        if (response.status === 200) {
          res.status(200).json({
            'status': 200,
            'data': response.data
          })
        } else {
          res.status(500).json({
            'status': 500,
            'message': 'Menu API Error'
          })
        }
        res.end()
      })
      .catch(error => {
        console.error('AXIOS Error: ' + error)
        res.status(500).json({
          'title': 'Menu Failure',
          'status': 500
        })
      })
  } catch(error) {
    console.log('AUTH Error: ' + error)
    res.status(500).json({
      'title': 'Menu Auth Failure',
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
