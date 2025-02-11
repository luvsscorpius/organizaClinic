const express = require('express')
const router = express.Router()

const db = require('../config/db')

router.get('/', async (req, res) => {
    console.log('Doctors route accessed.')

    const conn = await db()

    try {
        const sql = `SELECT * FROM medicos`
        conn.query(sql, (err, result) => {
            if (err) {
                console.error('Erro ao tentar consultar a tabela de médicos', err)
                res.status(500).send(err)
            }

            console.log('Consulta a tabela médicos efetuada com sucesso.')
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