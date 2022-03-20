const { Kafka } = require('kafkajs')

// const { KAFKA_USERNAME: username, KAFKA_PASSWORD: password } = process.env
// const sasl = username && password ? { username, password, mechanism: 'plain' } : null
// const ssl = !!sasl

// This creates a client instance that is configured to connect to the Kafka broker provided by
// the environment variable KAFKA_BOOTSTRAP_SERVER
const kafka = new Kafka({
  clientId: 'jalbot',
  brokers: [process.env.KAFKA_BOOTSTRAP_SERVER],
  ssl: true,
  sasl: {
    mechanism: 'plain', // scram-sha-256 or scram-sha-512
    //username: process.env.KAFKA_USERNAME,
    //password: process.env.KAFKA_PASSWORD
    username: 'WGK2VM3PUME5ELK6',
    password: 'hh3pAiaTQj9yo2pJG8jUyLVk5Ak6go9MlGwLX3gu51sRqwQkKP/BY/W3LbdbBC+6'
  }
})

module.exports = kafka
