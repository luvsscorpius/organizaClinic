const express = require('express')
const router = express.Router()

const db = require('../config/db')

router.get('/', async (req, res) => {
    console.log('getAppointments route accessed.')

    const conn = await db()

    try {
        const sql = `SELECT * FROM Agenda`

        conn.query(sql, (err, result) => {
            if (err) {
                console.error('Erro ao efetuar consulta a tabela agenda no banco de dados.')
                return res.status(500).send(err)
            }

            console.log('Consulta a tabela agenda no banco de dados efetuada com sucesso.')
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