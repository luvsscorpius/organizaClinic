const mysql = require('mysql2')

const connection = async () => {
    try {
        const conexao = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'January18Th*',
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