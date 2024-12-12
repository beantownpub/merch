import express from 'express'
import * as axios from 'axios'
import { urls } from '../utils/appUrls.js'
const router = express.Router()
const API_USERNAME = process.env.API_USERNAME
const API_PASSWORD = process.env.API_PASSWORD
console.log(`Menu URL: ${urls.menuApi}`)
const AUTH = 'Basic ' + Buffer.from(API_USERNAME + ':' + API_PASSWORD).toString('base64')
const OPTIONS = {
  method: 'get',
  headers: {'Content-Type': 'application/json', 'Authorization': AUTH},
  url: ''
}

async function getMenu(uri, res) {
  OPTIONS.url = `${urls.menuApi}${uri}`
  try {
    const response = await axios.default(OPTIONS)
    res.status(200).json({'status': 200, 'data': response.data})
  } catch (error) {
    console.error(error)
    res.status(500).json({'status': 599, 'message': error.message})
  }
}

router.get('/categories', async (req, res, next) =>{
    await getMenu(`/v1/menu?location=beantown`, res)
})

router.get('/:page', function(req, res, next) {
  res.redirect(`/${req.params['page']}`)
})

export default router
