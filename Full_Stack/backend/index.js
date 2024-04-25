const connectToMongo = require("./db")
const express = require('express')
const cors = require('cors')
const User = require('./models/Node');
const port = 4000;

connectToMongo()
const app = express()
app.use(express.json())
app.use(cors())

app.post('/register', (req, res) => {
    User.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})

app.listen(port, () => {
    console.log("server is ready")
})