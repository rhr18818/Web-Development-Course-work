// const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.end("Hello from server..!")
// })

// server.listen(3000,()=>{
//     console.log("server is runnin on port 3000 ! ");
// })

const express = require('express')

//server creation 
const server = express()

server.get('/',(req,res)=>{
    res.send("Welcome to Default Page.. !")
})
server.get('/home',(req,res)=>{
    res.send("Welcome to Home Page.. !")
})
server.get('/about',(req,res)=>{
    res.send("Welcome to About Page.. !")
})

// listen to port
server.listen(3000,()=>{
    console.log("server is runnin on port 3000 ! ");
})