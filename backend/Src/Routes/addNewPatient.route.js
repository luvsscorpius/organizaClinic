const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('addNewPatient route')
    res.status(200).send('Teste')
})

module.exports = router