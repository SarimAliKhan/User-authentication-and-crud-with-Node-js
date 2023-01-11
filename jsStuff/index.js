// const simple = require('./second')

// simple();


// const emitt= require('events');

// class MyEmitter extends emitt {}

// const myEmitter = new MyEmitter();

// myEmitter.on('Waterfull', () => {
//     console.log("Please turnoff the motor");
// })

// myEmitter.emit('Waterfull');

const stud = [{"name":"Sarim","value" : 22},{
    "name":"Ammar","value" : 21}]

function Enroll(student){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            stud.push(student)
            const err = true
            if(err != false) {
                resolve()
            }
            else {
                reject()
            }
        },1000)
    })
}

function getStudent(){
    console.log("Student : " ,stud)
}

student1 = {"name":"zohair","value":20}
Enroll(student1).then(function(){
    getStudent();
}).catch(function(){
    console.log("Some error occured");
})


const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("Welcome")
})

app.listen(8000,() => {
    console.log("Listeingi on 8000")
})