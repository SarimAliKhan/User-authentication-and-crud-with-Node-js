const express = require('express')

const mysql = require('mysql2')


const app = express()
//GLOBAL MIDDLEWARE ( MUST BE DEFINED AT THE START OF PROGRAM)
app.use(middleware)
//app.use(middleware2)

const mydb = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'sarim',
    database :'nodemysql'

})

mydb.connect((err) => {
    if(err){
        throw err;

    }
    else{
        console.log("connection established")
    }
})

app.get('/createtable', (req, res) => {
    sql_query = 'CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(255),PRIMARY KEY(id))'
    mydb.query(sql_query, (err,result) => {
        if(err){
            throw err;
        }
        res.send("Table created successfully")
    })
}
)

app.post('/postdata/:title' , (req, res) => {
    //data = {title : 'Sarim Post'}
    sql_query = "INSERT INTO posts(title) VALUES(?) "
    mydb.query(sql_query,`${req.params.title}`, (err, result) => {
        if(err){
            throw err
        }
        res.send(result)
        console.log("table data updated")
        
    })
})



app.put('/updatedata/:id/:title' , (req, res) => {
    //data = {title : 'Sarim Post'}
    console.log(req.params.title)
    sql_query = `UPDATE posts SET title = '${req.params.title}' WHERE id = ${req.params.id}`
    mydb.query(sql_query, (err, result) => {
        if(err){
            throw err
        }
        res.send(result)
        console.log("post fetch success")
        
    })
})

app.delete('/deletedata/:id' , (req, res) => {
    //data = {title : 'Sarim Post'}
    console.log(req.params.title)
    sql_query = `DELETE FROM posts WHERE id = ${req.params.id}`
    mydb.query(sql_query, (err, result) => {
        if(err){
            throw err
        }
        res.send(result)
        console.log("post fetch success")
        
    })
})

app.post('/postdata', (req, res) => {

})

app.get('/createdb', (req, res) => {
    sql_query = 'CREATE DATABASE nodemysql'
    mydb.query(sql_query, (err, result) => {
        if(err) throw err;
        res.send("Database created")
    })
})


app.listen(8000,() => {
    console.log("Listening to 8000 Port")
})



//ROUTE MIDDLEWARE

function middleware (req, res,next) {
    console.log("I was here")
    next()
}

app.get('/getdata' , (req, res) => {
    data = {title : 'Sarim Post'}
    sql_query = "SELECT * from posts"
    mydb.query(sql_query,data, (err, result) => {
        if(err){
            throw err
        }
        res.send(result)
        console.log("post fetch success")
        
    })
})

//ERROR HANDLER MIDDLEWARE
function middleware2(req, res,next) {
    console.log("middleware 2")
    const errObj = new Error("I am error ")
    next(errObj)
}

function errorhandler(err,req, res,next) { 
    if (err){
        res.send("Error created")
    }
}

//WILL BE USED IN THE END OF ALL ROUTES OF PROGRAM 
app.use(errorhandler)