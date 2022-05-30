const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aplikasi'
})

db.connect((err) => {
    if (err) throw err;
    console.log('database connected')
})

module.exports = db