const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.put('/:id', async (req, res) => {
    console.log('Update appointment accessed.')
    const id = req.params
    const eventData = req.body
    console.log(id, eventData)
})

module.exports = router