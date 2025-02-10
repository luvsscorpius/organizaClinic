const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.put('/:id', async (req, res) => {
    console.log('Update appointment accessed.')
})

module.exports = router