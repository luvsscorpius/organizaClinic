const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.put('/:id', async (req, res) => {
    console.log('Update Patient route accessed.')
    const id = req.params
    const patientUpdate = req.body
    // console.log(id, patientUpdate)

    const {Nome, DataDeNascimento, Genero, Sexo, CPF, Telefone, Email, Naturalidade, CEP, Rua, Numero, Bairro, Cidade, Estado} = patientUpdate

    console.log(DataDeNascimento)

    try {
        const conn = await db()
        const sql = `UPDATE Pacientes SET Nome = '${Nome}', DataDeNascimento = '${DataDeNascimento}', Genero = '${Genero}', Sexo = '${Sexo}', CPF = '${CPF}', Telefone = '${Telefone}', Email = '${Email}', Naturalidade = '${Naturalidade}', CEP = '${CEP}', Rua = '${Rua}', Numero = '${Numero}', Bairro = '${Bairro}', Cidade = '${Cidade}', Estado = '${Estado}' WHERE IDPaciente = ${id.id}`

        await conn.query(sql, (err, result) => {
            if (err) {
                console.error('Erro ao efetuar edição do paciente', err)
                return res.status(500).send(err)
            }

            console.log('Edição do paciente efeatuado com sucesso.')
            return res.status(200).send(result)
        })
    } catch (error) {
        console.error(error)
    }
})

module.exports = router