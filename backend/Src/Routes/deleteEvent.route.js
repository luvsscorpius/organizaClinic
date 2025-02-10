const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.delete('/:id', async (req, res) => {
    console.log('Delete event route accessed.')

    try {
        const conn = await db()
    } catch (error) {
        console.error(error)
    }
})

module.exports = router