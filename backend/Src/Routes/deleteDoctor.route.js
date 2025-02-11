const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.delete('/:id', async (req, res) => {
    const id = req.params
    console.log(id)

    const conn = await db()

    try {
        const sql = `DELETE FROM Medicos WHERE IDMedico = ${id.id}`
        conn.query(sql, (err, result) => {
            if (err) {
                console.log('Erro ao tentar excluir médico', err)
                return res.status(500).send(err)
            }

            console.log('Exclusão efetuada com sucesso')
            return res.status(200).send(result)
        })
    } catch (error) {
        console.error(error)
    } finally {
        conn.end()
        console.log('Conexão com o banco de dados fechada.')
    }
})

module.exports = router