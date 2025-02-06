const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.delete('/:id', async (req, res) => {
    const id = req.params
    console.log(id)

    try {
        const conn = await db()
        
        const sql = `DELETE FROM Pacientes WHERE IDPaciente = ${id.id}`

        await conn.query(sql, (err, result) => {
            if (err) {
                console.log('Erro ao efetuar exclusão de paciente', err)
                return res.status(500).send(err)
            }

            console.log('Paciente excluído com sucesso.')
            return res.status(200).send(result)
        })

    } catch (error) {
        console.error(error)
    }
})

module.exports = router