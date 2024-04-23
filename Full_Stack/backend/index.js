const connectToMongo = require("./db")
const express = require('express')
const cors = require('cors')
const User = require('./models/Node');

connectToMongo()
const app = express()
app.use(express.json())
app.use(cors())

app.post('/register', (req, res) => {
    User.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})

app.listen(4000, () => {
    console.log("server is ready")
})