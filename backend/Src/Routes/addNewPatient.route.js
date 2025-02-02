const express = require('express')
const router = express.Router()

const db = require('../config/db')

router.post('/', async (req, res) => {

    try {
        const newPatient = req.body

        const conn = await db()

        console.log(newPatient)
        console.log('addNewPatient route')
        res.status(200).send('Teste')
    } catch (error) {
        console.error(error)
    }
})

module.exports = router