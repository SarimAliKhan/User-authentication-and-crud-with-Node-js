const    http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    if (req.url == '/'){
        res.end("Hello from Sarim's Center ")
    }
    else if(req.url =='/about'){
        res.end("about us bruhhh")
    }
    else if(req.url == '/api'){
        fs.readFile("api.json","utf8",(err, data) => {
            const getter  = JSON.parse(data)
            console.log(getter[0].name)
            res.end(data)
        })
    }
})

server.listen(8000,"127.0.0.1",() => {
    console.log("Server up and running")
})