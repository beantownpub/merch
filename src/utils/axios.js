const axios = require('axios')
const authHeaders = require('./auth')

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
    authHeaders['Content-Type'] = 'application/json'
    authHeaders['Cart-ID'] = cartId.split(':')[1].split('.')[0] || 'foo'
    options.headers = authHeaders
    console.log(`makeRequest | METHOD: ${options.method} | URL | ${options.url}`)
    try {
        axios(options)
        .then(response => {
            console.log(`makeRequest | Response: ${response.status}`)
            if (OK_RESPONSES.includes(response.status)) {
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

module.exports = cartRequest
