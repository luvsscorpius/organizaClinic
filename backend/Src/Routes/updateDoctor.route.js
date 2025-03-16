const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.put('/:id', async (req, res) => {
    console.log('Update Doctor route accessed.')
    const id = req.params
    const doctorUpdate = req.body

    const conn = await db()

    try {
        const sql = `UPDATE medicos SET Nome = '${doctorUpdate.NomeMedico}', CPF = '${doctorUpdate.CPF}', CRM = '${doctorUpdate.CRM}', Especialidade = '${doctorUpdate.Especialidade}', Telefone = '${doctorUpdate.Telefone}', Email = '${doctorUpdate.Email}' WHERE IDMedico = '${id.id}'`

        conn.query(sql, (err, result) => {
            if (err) {
                console.log('Erro ao tentar efetuar a edição do médico', err)
                return res.status(500).send(err)
            }

            console.log('Edição do médico efetuada com sucesso.')
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