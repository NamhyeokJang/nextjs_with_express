const router = require('express').Router()

router.use('/user', require('./user'))

router.get('/', (req, res) => {
    res.send('GET: api')
})

module.exports = router