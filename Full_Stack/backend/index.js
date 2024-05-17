// const connectToMongo = require("./db")
// const express = require('express')
// const cors = require('cors')
// const User = require('./models/Node');

import connectToMongo from "./db.js";
import express from 'express';
import cors from 'cors';
import User from "./models/Node.js"
const PORT = 3001;

connectToMongo()
const app = express()
app.use(express.json())
app.use(cors())

app.post('/register', (req, res) => {
    User.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                }
                else {
                    res.json("wrong password")
                }
            }
        }).catch(err => console.log(`Error Occured`)
})

app.post('/forgot', (req, res) => {
    const { id } = req.params;
    const { email, npassword } = req.body;
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password != npassword) {
                    User.findByIdAndUpdate({ _id: id }, { password: npassword })
                        .then(e => res.json("Success"))
                }
                else {
                    res.json("fail")
                }
            }
        }).catch(err => console.log(`Error Occured`)
})

app.listen(PORT, () => {
    console.log("server is ready")
})