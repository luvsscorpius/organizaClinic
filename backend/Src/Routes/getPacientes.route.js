const express = require('express')
const router = express.Router()

const db = require('../config/db')

router.get('/', async (req, res) => {
    console.log('getPacientes route')
    const conn = await db()

    try {
        const sql = `SELECT * FROM pacientes`

        conn.query(sql, (err, result) => {
            if (err) {
                console.error('Erro ao buscar dados', err)
            }

            res.status(200).send(result)
        })
    } catch (error) {
        console.error(error)
    } finally {
        conn.end()
        console.log('Conexão com o banco de dados fechada.')
    }
})

module.exports = router