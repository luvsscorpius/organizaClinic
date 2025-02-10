const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.delete('/:id', async (req, res) => {
    console.log('Delete event route accessed.')
    const id = req.params
    console.log(id)

    try {
        const conn = await db()

        const sql = `DELETE FROM Agenda WHERE IDConsulta = '${id.id}'`
        await conn.query(sql, (err, result) => {
            if (err) {
                console.error('Erro ao excluir consulta', err)
                return res.status(500).send(err)
            }

            console.log('Exclusão de evento efetuada com sucesso.')
            return res.status(200).send(result)
        })
    } catch (error) {
        console.error(error)
    }
})

module.exports = router