const axios = require('axios')
const authHeaders = require('./auth')

const OPTIONS = {
    method: 'get',
    headers: authHeaders,
    url: ''
}

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

function makeRequest(url, res) {
    OPTIONS.url = url
    try {
        axios(OPTIONS)
        .then(response => {
            if (response.status === 200) {
            res.status(200).json({'status': 200, 'data': response.data})
            } else {
            res.status(500).json(RESPONSES.apiError)
            }
            res.end()
        })
        .catch(error => {
            console.error('AXIOS Error: ' + error)
            res.status(500).json(RESPONSES.axiosError)
        })
    } catch(error) {
        console.log('AUTH Error: ' + error)
        res.status(500).json(RESPONSES.authError)
    }
}

module.exports = makeRequest
