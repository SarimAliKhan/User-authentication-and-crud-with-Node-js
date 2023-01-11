require('dotenv').config()
const { application } = require('express')
const express = require('express')
const app = express()
const jwt = require("jsonwebtoken")

app.use(express.json())
const posts = [
    {
        username: 'admin',
        title: 'Welcome'
    }
]

app.post('/login', (req, res) => {
    const username = req.body.username
    const user = {name : username}
    const token = jwt.sign(user,process.env.ACCESS_KEY)
    res.json({token:token})
})  

app.listen(8000, (err) => {
    if(!err){
        console.log("Up and running")
    }
})