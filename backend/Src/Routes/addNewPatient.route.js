const express = require('express')
const router = express.Router()

const db = require('../config/db')

router.post('/', async (req, res) => {
    const newPatient = req.body
    const {Nome, DataDeNascimento, Genero, Sexo, CPF, Telefone, Email, Naturalidade, CEP, Rua, Numero, Bairro, Cidade, Estado, DataDeCadastro} = newPatient

    console.log('addNewPatient route')

    const conn = await db()

    try {
        const sql = `INSERT INTO pacientes (Nome, DataDeNascimento, Genero, Sexo, CPF, Telefone, Email, Naturalidade, CEP, Rua, Numero, Bairro, Cidade, Estado, DataDeCadastro) VALUES ('${Nome}', '${DataDeNascimento}', '${Genero}', '${Sexo}', '${CPF}', '${Telefone}',' ${Email}', '${Naturalidade}', '${CEP}', '${Rua}', '${Numero}', '${Bairro}', '${Cidade}', '${Estado}', '${DataDeCadastro}')`

        conn.query(sql, (err, result) => {
            if (err) {
                console.error('Erro ao adicionar dados ao banco de dados', err)
                return
            }

            console.log('Dados inseridos ao banco de dados')
            res.status(200).send('Dados inseridos ao banco de dados')
        })
    } catch (error) {
        console.error(error)
    } finally {
        await conn.end()
        console.log('Conexão com o banco de dados fechada.')
    }
})

module.exports = router