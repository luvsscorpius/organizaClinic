const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('Rota home acessada')
    res.send('Hello World!')
})

module.exports = router