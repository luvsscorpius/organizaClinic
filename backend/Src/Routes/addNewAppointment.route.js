const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
    console.log('addNewAppointment accessed.')
})

module.exports = router