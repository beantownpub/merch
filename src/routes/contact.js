import express from 'express'
import * as axios from 'axios'
import { appSecret } from '../utils/secrets.js'
import { urls } from '../utils/network.js'
const router = express.Router()

router.post('/send-message', function (req, res, next) {
  try {
    const api_url = `${urls.contactApi}/v1/contact/beantown`
    const auth = 'Basic ' + Buffer.from(appSecret.api_user + ':' + appSecret.api_pass).toString('base64')
    axios({
      method: 'post',
      url: api_url,
      data: req.body,
      headers: {'Content-Type': 'application/json', 'Authorization': auth}
    })
      .then(response => {
        if (response.status === 200) {
          res.status(200).json({
            'status': 200,
            'msg': 'Request Received! We will respond to you as soon as we can. Thanks!'
          })
        } else {
          res.status(500).json({
            'status': 500,
            'msg': 'Contact API Error'
          })
        }
        res.end()
      })
      .catch(error => {
        console.error('Contact POST Axios: ' + error)
        res.status(500).json({
          'msg': 'Sorry, there was an error sending your request. Please send an email directly to beantownpubboston@gmail.com',
          'status': 500
        })
      })
  } catch(error) {
    console.log('Contact Unknown Error: ' + error)
    res.status(500).json({
      'masg': 'Contact unknown error',
      'status': 500
    })
  }
})

router.get('/:page', function(req, res, next) {
  console.log(`Redirecting /${req.params['page']}`)
  res.redirect(`/${req.params['page']}`)
})

export default router
