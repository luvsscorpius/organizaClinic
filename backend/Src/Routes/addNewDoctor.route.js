const express = require('express')
const router = express.Router()

const db = require('../config/db')

router.post('/', async (req, res) => {
    console.log('addNewDoctor route accessed')
    const newMedico = req.body
    const {Nome, CPF, CRM, Especialidade, Email, Telefone, DataDeCadastro} = newMedico
    console.log(newMedico)

    const conn = await db()

    try {
        const sql = `INSERT INTO medicos (Nome, CPF, CRM, Especialidade, Telefone, DataDeCadastro, Email) VALUES ('${Nome}', '${CPF}', '${CRM}', '${Especialidade}', '${Telefone}', '${DataDeCadastro}', '${Email}')`

        conn.query(sql, (err, result) => {
            if (err) {
                console.error('Erro ao inserior dados ao banco de dados.', err)
                res.status(500)
                return
            }

            console.log('Médico cadastrado com sucesso.')
            res.status(200).send('Médico cadastrado com sucesso.')
        })
    } catch (error) {
        console.error(error)
        res.status(500)
    } finally {
            await conn.end()
            console.log('Conexão com o banco de dados fechada.')
    }
})
 
module.exports = router