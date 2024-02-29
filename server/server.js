const express = require('express')
const server = express()
server.use(express.json())
server.use('/api', require('./api'))
server.get('/', (req, res) => res.send('Hello from server'))
module.exports = server
