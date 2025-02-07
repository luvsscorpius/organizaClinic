const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.put('/:id', async (req, res) => {
    const id = req.params
    console.log(id)
    const doctorUpdate = req.body
    console.log(doctorUpdate)

    try {

        const conn = await db()

        const sql = `UPDATE Medicos SET Nome = '${doctorUpdate.NomeMedico}', CPF = '${doctorUpdate.CPF}', CRM = '${doctorUpdate.CRM}', Especialidade = '${doctorUpdate.Especialidade}', Telefone = '${doctorUpdate.Telefone}', Email = '${doctorUpdate.Email}'`

        await conn.query(sql, (err, result) => {
            if (err) {
                console.log('Erro ao tentar efetuar a edição do médico', err)
                return res.status(500).send(err)
            }

            console.log('Edição do médico efetuada com sucesso.')
            return res.status(200).send(result)
        })
    } catch (error) {
        console.error(error)
    }



    console.log('Update Doctor route accessed.')
})

module.exports = router