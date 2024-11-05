const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '980333',
    database: 'fsbootcamp24'
})

connection.connect((error) =>{
    if(error)console.log(error);
    else console.log('Connected to the database')
})

module.exports = connection;