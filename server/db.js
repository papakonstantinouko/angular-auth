const mongoose = require('mongoose')
const server = require('./server')

async function run() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    })

    server.listen(process.env.PORT, () =>
      console.log(`Server running on localhost:${process.env.PORT}`)
    )
  } catch (error) {
    console.error(error)
  }
}

module.exports = run
