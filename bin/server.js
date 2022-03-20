#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../src/app');
var debug = require('debug')('node-jal:server');
var http = require('http');
const kafka = require('../src/utils/kafka')

const producer = kafka.producer()

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.on('package:publish', async event => {
  console.log('FOOOOO')
  console.log(event)
  try {
    const responses = await producer.send({
      topic: 'click',
      messages: [{
        // Name of the published package as key, to make sure that we process events in order
        key: event.name,

        // The message value is just bytes to Kafka, so we need to serialize our JavaScript
        // object to a JSON string. Other serialization methods like Avro are available.
        value: JSON.stringify({
          package: event.name,
          version: event.version
        })
      }]
    })
    console.log('Published message', { responses })
  } catch (error) {
    console.error('Error publishing message', error)
  }
})

server.listen(port, () => console.log(`listening on - http://localhost:${port}`));
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const main = async () => {
    await producer.connect()
  }
  main()
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  debug('Listening on ' + bind)
  debug(`Env: ${process.env}`)
}
