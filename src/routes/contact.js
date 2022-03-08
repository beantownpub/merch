var express = require('express')
var router = express.Router()
const axios = require('axios')
const utils = require('../utils/main')
const network = require('../utils/network')


router.post('/send-message', function (req, res, next) {
  // console.log(req.body)
  try {
    const api_url = `${network.urls.contactApi}/v1/contact/beantown`
    axios({
      method: 'post',
      url: api_url,
      data: req.body,
      headers: utils.authHeaders
    })
      .then(response => {
        if (response.status === 200) {
          // console.log(response.data)
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
        console.error('Contact POST Axios: ' + error)
        res.status(500).json({
          'title': 'Contact Failure',
          'status': 500
        })
      })
  } catch(error) {
    console.log('Contact Unknown Error: ' + error)
    res.status(500).json({
      'title': 'Contact unknown error',
      'status': 500
    })
  }
})

router.get('/:page', function(req, res, next) {
  console.log(`Redirecting /${req.params['page']}`)
  res.redirect(`/${req.params['page']}`)
})

module.exports = router
