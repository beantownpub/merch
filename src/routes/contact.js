var express = require('express')
var router = express.Router()
const axios = require('axios')

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

router.get('/:page', function(req, res, next) {
  res.redirect(`/${req.params['page']}`)
})

module.exports = router
