require('dotenv').config()

const run = require('./db')
run().catch(console.dir)
