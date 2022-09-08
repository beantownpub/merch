
const API_USERNAME = process.env.API_USERNAME
const API_PASSWORD = process.env.API_PASSWORD
const creds = API_USERNAME + ':' + API_PASSWORD
const AUTH = 'Basic ' + Buffer.from(creds).toString('base64')
const HEADERS = {'Content-Type': 'application/json', 'Authorization': AUTH}

module.exports = HEADERS
