// const connectToMongo = require("./db")
// const express = require('express')
// const cors = require('cors')
// const User = require('./models/Node');

import connectToMongo from "./db.js";
import express from 'express';
import cors from 'cors';
import User from "./models/Node.js"
const PORT = 4000;

connectToMongo()
const app = express()
app.use(express.json())
app.use(cors())

app.post('/register', (req, res) => {
    User.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})

app.listen(PORT, () => {
    console.log("server is ready")
})