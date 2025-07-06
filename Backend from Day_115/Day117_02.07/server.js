const express = require('express')

const server = express()

//middleware to read json files
server.use(express.json())


let notes = []

server.get('/',(req,res)=>{
    res.send("Welcome from default page")
})
server.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    res.json({
        message: "Note added Successfuly",
        notes
    })
    
})


server.listen(3000,()=>{
    console.log("server started on port 3000");
    
})