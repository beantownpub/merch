const config = require('./config.json')

const getOptions = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
}

const reqHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
  var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
  return v.toString(16)
  })
}

module.exports = {config, getOptions, reqHeaders, uuidv4 }
