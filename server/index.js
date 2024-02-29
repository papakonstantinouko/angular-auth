require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())
app.get('/', (req, res) => res.send('Hello from server'))
app.listen(process.env.PORT, () =>
  console.log(`Server running on localhost:${process.env.PORT}`)
)
