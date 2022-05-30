const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//deklarasi route
const userRoute = require('./routes/userRoute.js')

//bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//setting folder views
app.set('views', 'views')

//setting view engine
app.set('view engine', 'ejs')

//route
app.use(userRoute)

app.listen(3000, () => {
    console.log('server ready')
})