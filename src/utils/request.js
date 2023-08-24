import axios from axios;
import secret from './secrets.js'

const AUTH = 'Basic ' + Buffer.from(secret.api_user + ':' + secret.api_pass).toString('base64')
const OPTIONS = {
    method: 'get',
    headers: {'Content-Type': 'application/json', 'Authorization': AUTH},
    url: ''
}

const RESPONSES = {
    apiError: {
        'status': 500,
        'message': 'API Error'
    },
    axiosError: {
        'status': 500,
        'message': 'Axios Failure'
    },
    uncaughtError: {
        'status': 500,
        'message': 'No idea what caused this :('
    }
}

function makeRequest(url, res) {
  OPTIONS.url = url
  console.log('Requested URL - ' + OPTIONS.url)
  try {
    axios.default(OPTIONS)
    .then(response => {
      if (response.status === 200) {
        console.log('URL - ' + OPTIONS.url)
        console.log('Axios Response Status - ' + response.status)
        res.status(200).json({'status': 200, 'data': response.data})
      } else {
          res.status(500).json(RESPONSES.apiError)
      }
      res.end()
    })
    .catch(error => {
      console.error('Axios Response Status - ' + error)
      if (error.response.status === 404) {
          res.status(200).json({'status': 200, 'data': []})
      } else {
          console.log('Axios Message - ' + error.message)
          res.status(500).json(RESPONSES.apiError)
      }
    })
  } catch(error) {
    console.log('Uncaught Error - ' + error)
    res.status(500).json(RESPONSES.uncaughtError)
  }
}

export default makeRequest
