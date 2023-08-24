import express from 'express'
import makeRequest from '../utils/request.js'
import network from '../utils/network.js'
const router = express.Router()

function sendRequest(uri, res) {
  try {
    const apiUrl = `${network.urls.menuApi}${uri}`
    makeRequest(apiUrl, res)
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
  sendRequest(uri, res)
})

router.get('/sides', function (req, res, next) {
  const uri = `/v1/menu?location=beantown`
  sendRequest(uri, res)
})

router.get('/:page', function(req, res, next) {
  res.redirect(`/${req.params['page']}`)
})

export default router
