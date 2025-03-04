const mysql = require('mysql2')

const user = process.env.USER
const password = process.env.PASSWORD
const host = process.env.HOST
const port = process.env.PORT
const database = process.env.DATABASENAME

const connection = async () => {
    try {
        const conexao = await mysql.createConnection({
            host: host,
            user: user,
            port: port,
            password: password,
            database: database
        })

        console.log('Conexao bem-sucedida.')
        return conexao
    } catch (error) {
        console.error('Erro ao conectar ao banco da dados', error)
        throw new error
    }
}

module.exports = connection