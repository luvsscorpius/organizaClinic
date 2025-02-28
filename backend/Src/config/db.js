const mysql = require('mysql2')

const user = process.env.USER
const password = process.env.PASSWORD

const connection = async () => {
    try {
        const conexao = await mysql.createConnection({
            host: 'localhost',
            user: user,
            port: 3307,
            password: password,
            database: 'OrganizaClinic'
        })

        console.log('Conexao bem-sucedida.')
        return conexao
    } catch (error) {
        console.error('Erro ao conectar ao banco da dados', error)
        throw new error
    }
}

module.exports = connection