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
                    res.json("Success");
                } else {
                    res.status(401).json("Wrong password");
                }
            } else {
                res.status(404).json("User not found");
            }
        })
        .catch(err => {
            console.error(`Error occurred: ${err}`);
            res.status(500).json("Internal server error");
        });
});


app.post('/forgot', (req, res) => {
    const { id } = req.params;
    const { email, npassword } = req.body;

    User.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password !== npassword) {
                    User.findByIdAndUpdate(id, { password: npassword })
                        .then(() => res.json("Success"))
                        .catch(err => {
                            console.error(`Error occurred during password update: ${err}`);
                            res.status(500).json("Internal server error");
                        });
                } else {
                    res.status(400).json("New password must be different from the old password");
                }
            } else {
                res.status(404).json("User not found");
            }
        })
        .catch(err => {
            console.error(`Error occurred: ${err}`);
            res.status(500).json("Internal server error");
        });
});


app.listen(PORT, () => {
    console.log("server is ready")
})