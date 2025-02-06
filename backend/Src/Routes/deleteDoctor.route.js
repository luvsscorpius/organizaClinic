const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.delete('/', async (req, res) => {
    try {
        const conn = await db()
    } catch (error) {
        console.error(error)
    }
})

module.exports = router