
const axios = require('axios')
const authHeaders = require('./auth')


function makeRequest(url, res) {
    try {
        axios({
        method: 'get',
        url: url,
        headers: authHeaders
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
                'message': 'Merch API Error'
            })
            }
            res.end()
        })
        .catch(error => {
            console.error('AXIOS Error: ' + error)
            res.status(500).json({
            'title': 'Merch Failure',
            'status': 500
            })
        })
    } catch(error) {
        console.log('AUTH Error: ' + error)
        res.status(500).json({
        'title': 'Merch Auth Failure',
        'status': 500
        })
    }
}

module.exports = makeRequest
