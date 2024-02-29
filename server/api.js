const { User } = require('./models')
const router = require('express').Router()

router.get('/', (req, res) => res.send('Hello from API'))

router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body)
    const registeredUser = await user.save()
    res.status(201).send(registeredUser)
  } catch (error) {
    console.error(error)
  }
})

module.exports = router
