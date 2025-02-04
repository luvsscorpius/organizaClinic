const express = require('express')
const router = express.Router()

const db = require('../config/db')

router.post('/', async (req, res) => {
    const newAppointment = req.body
    console.log('addNewAppointment accessed.')

    console.log(newAppointment)

    const {DataConsulta, HorarioConsulta, DescricaoConsulta, pacientes_IDPaciente, medicos_IDMedico} = newAppointment

    try {

        const conn = await db()

        const sql = `INSERT INTO Agenda (DataConsulta, HorarioConsulta, DescricaoConsulta, pacientes_IDPaciente, medicos_IDMedico) VALUES ('${DataConsulta}', '${HorarioConsulta}', '${DescricaoConsulta}', '${pacientes_IDPaciente}', '${medicos_IDMedico}')`

        await conn.query(sql, (err, result) => {
            if (err) {
                console.error('Erro ao tentar inserir dados ao banco de dados.', err)
                return res.status(500).send(err)
            } 

            console.log('Consulta agendada com sucesso.')
            res.status(200).send('Consulta agendada com sucesso')
        })
    } catch (error) {
        console.error(error)
    }
})

module.exports = router