const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.put('/:id', async (req, res) => {
    console.log('Update Patient route accessed.')
    const id = req.params
    const patientUpdate = req.body
    console.log(id, patientUpdate)

    try {
        const conn = await db()
    } catch (error) {
        console.error(error)
    }
})

module.exports = router