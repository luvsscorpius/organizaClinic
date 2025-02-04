const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
    const newAppointment = req.body

    try {
        console.log(newAppointment)
        console.log('addNewAppointment accessed.')
        res.status(200).send('Consulta agendada com sucesso')
    } catch (error) {
        console.error(error)
    }
})

module.exports = router