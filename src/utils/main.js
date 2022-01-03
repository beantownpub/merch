const config = require('./config.json')

const getOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
}

module.exports = { config, getOptions }
