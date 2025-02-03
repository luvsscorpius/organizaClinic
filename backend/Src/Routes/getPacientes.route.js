const express = require('express')
const router = express.Router()

const db = require('../config/db')

router.get('/', async (req, res) => {
    try {
        const conn = await db()

        const sql = `SELECT * FROM pacientes`

        await conn.query(sql, (err, result) => {
            if (err) {
                console.error('Erro ao buscar dados', err)
            }

            console.log(result)
            res.status(200).send(result)
            console.log('getPacientes route')
        })
    } catch (error) {
        console.error(error)
    }
})

module.exports = router