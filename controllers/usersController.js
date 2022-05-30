const db = require('../db.js')

const getUsers = ((req, res) => {
    const sql = "SELECT * FROM users"
    db.query(sql, (err, result) => {
        const users = JSON.parse(JSON.stringify(result))
        console.log(users)
        res.render('user', {users: users})
    })
})

const addUser = ((req, res) => {
    let createdAt = new Date().toISOString()
    let updatedAt = new Date().toISOString()
    const insertSql = `INSERT INTO users (nama, password, createdAt, updatedAt) VALUES ('${req.body.nama}', '${req.body.password}', '${createdAt}', '${updatedAt}')`
    db.query(insertSql, (err, result) => {
        if (err) throw err;
        res.redirect('/')
    })
})

const editUser = ((req, res) => {
    // let updatedAt = new Date().toISOString()
    let id = req.params.id
    const editSql = `SELECT * FROM users WHERE id = ?`
    db.query(editSql, id, (err, rows, result) => {
        if (err) throw err;
        if (rows.length <= 0 ) {
            req.flash('error', 'user tidak ditemukan dengan id = '+req.params.id)
        } else {
            res.render('edit', {
                id:rows[0].id,
                nama:rows[0].nama,
                password:rows[0].password
            })
            console.log(rows)
        }
    })
})

const updateUser = ((req, res) => {
    let updatedAt = new Date().toISOString()
    let data = {
        // id: req.params.id,
        nama: req.body.nama,
        password: req.body.password,
        updatedAt: updatedAt
    }
    const updateSql = "UPDATE users SET ? WHERE id = ?"
    db.query(updateSql, [data, req.params.id], (err, result) => {
        if (err) throw err;
        res.redirect('/')
    })
})

const deleteUser = ((req, res) => {
    let id = req.params.id
    const deleteUser = "DELETE FROM users WHERE id = ?"
    db.query(deleteUser, id, (err, result) => {
        if (err) throw err;
        res.redirect('/')
    })
})

module.exports = {
    getUsers,
    addUser,
    editUser,
    updateUser,
    deleteUser
}