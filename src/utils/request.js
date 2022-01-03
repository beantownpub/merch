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
    try {
        axios(OPTIONS)
        .then(response => {
            if (response.status === 200) {
                console.log('Axios Response Status - ' + response.status)
                console.log('Axios KEYS - ' + Object.keys(response.data))
                res.status(200).json({'status': 200, 'data': response.data})
            } else {
                res.status(500).json(RESPONSES.apiError)
            }
            res.end()
        })
        .catch(error => {
            console.error('Axios Response Status - ' + error.response.status)
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

module.exports = makeRequest
