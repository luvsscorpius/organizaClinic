const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.put('/:id', async (req, res) => {
    console.log('Update Doctor route accessed.')
})

module.exports = router