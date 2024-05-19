import connectToMongo from "./db.js";
import express from 'express';
import cors from 'cors';
import User from "./models/Node.js";
import { body, validationResult } from "express-validator";
import b1 from "bcryptjs";
import jwt from "jsonwebtoken";
const PORT = 3001;

connectToMongo()
const app = express()
app.use(express.json())
app.use(cors())
const jwt_str = "We are hacker";


app.post('/register', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(500).json({ errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(404).json({ error: "user already exits" })
        }
        const salt = await b1.genSalt(6);
        const spass = await b1.hash(req.body.password, salt);
        console.log(spass);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: spass,
        });
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, jwt_str);
        res.json(authtoken)

        //res.json(user)
    } catch (error) {
        console.error(error.massage);
        res.status(600).send("Some Error occured");
    }

})

app.post('/login', [body('email', 'Enter a valid email').isEmail(),
body('password', 'password cannot be empty').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(500).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(405).json({ error: "user not exits" })
        }
        const passcom = await b1.compare(password, user.password);
        console.log("DB Password = " + password)
        console.log("Page Password = " + user.password)
        if (!passcom) {
            return res.status(405).json({ error: "password miss match" })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, jwt_str);
        res.json("success")

    } catch (error) {
        console.error(error.massage);
        res.status(700).send("Some Error occured");
    }

})

app.put('/forgot', (req, res) => {
    const { id } = req.params;
    const { email, npassword } = req.body;
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password != npassword) {
                    User.Update({ email: email }, { password: npassword })
                        .then(e => res.json("Success"))
                }
                else {
                    res.json("fail")
                }
            }
        }).catch(err => console.log(`Error Occured`))
})

app.listen(PORT, () => {
    console.log("server is ready")
})