const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {

    try {
        const newPatient = req.body

        console.log(newPatient)
        console.log('addNewPatient route')
        res.status(200).send('Teste')
    } catch (error) {
        console.error(error)
    }
})

module.exports = router