const mysql = require('mysql2');

let db;

if (process.env.NODE_ENV === 'test') {
    // Mock para ambiente de teste
    db = {
        query: (sql, params, callback) => {
            if (typeof params === 'function') {
                callback = params;
            }
            callback(null, []); // Retorna uma resposta vazia
        }
    };
} else {
    db = mysql.createConnection({
        host: 'localhost',
        user: 'root', // Usuário padrão
        password: 'yourpassword', // Senha do banco de dados
        database: 'mydatabase'
    });

    db.connect((err) => {
        if (err) {
            console.error('Erro ao conectar ao banco de dados:', err);
            return;
        }
        console.log('Conectado ao banco de dados MySQL');
    });
}

module.exports = db;
