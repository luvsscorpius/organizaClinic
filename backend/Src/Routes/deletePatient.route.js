const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.delete('/:id', async (req, res) => {
    const id = req.params
    console.log(id)

    try {
        const conn = await db()
    } catch (error) {
        console.error(error)
    }
})

module.exports = router