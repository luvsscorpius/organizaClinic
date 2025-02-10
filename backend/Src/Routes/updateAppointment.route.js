const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.put('/:id', async (req, res) => {
    console.log('Update appointment accessed.')
    const id = req.params
    const eventData = req.body
    console.log(id, eventData)

    const {IDConsulta, DataConsulta, HorarioConsulta, DescricaoConsulta, pacientes_IDPaciente, medicos_IDMedico} = eventData

    try {
        const conn = await db()
        const sql = `UPDATE Agenda SET DataConsulta = '${DataConsulta}', HorarioConsulta = '${HorarioConsulta}', DescricaoConsulta = '${DescricaoConsulta}', pacientes_IDPaciente = '${pacientes_IDPaciente}', medicos_IDMedico = '${medicos_IDMedico}' WHERE IDConsulta = '${IDConsulta}'`

        await conn.query(sql, (err, result) => {
            if (err) {
                console.error('Erro ao efetuar atualização de evento', err)
                return res.status(500).send(err)
            }

            console.log('Sucesso ao efetuar atualização de evento')
            return res.status(200).send(result)
        })
    } catch (error) {
        console.error(error)
    }
})

module.exports = router