const API_USERNAME = process.env.API_USERNAME
const API_PASSWORD = process.env.API_PASSWORD
const AUTH = 'Basic ' + Buffer.from(API_USERNAME + ':' + API_PASSWORD).toString('base64')
const config = require('./config.json')

const getOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
}

const reqHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const authHeaders = {'Content-Type': 'application/json', 'Authorization': AUTH}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
    })
}



module.exports = { authHeaders, config, getOptions, reqHeaders, uuidv4 }
