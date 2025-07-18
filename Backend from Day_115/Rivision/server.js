const express = require('express')
const connectToDB = require('./src/db/db')
const noteModel = require('./src/models/note.model')

const server = express()
connectToDB()

server.use(express.json())
server.post('/notes',async(req,res)=>{
    const {title,content} = req.body
    console.log(title,content);

    await noteModel.create({
        title,
        content
    })
    res.json({
        message:"Note Created Successfully .!"
    })
    
})

server.listen(3000,()=>{
    console.log("Server is running on Port - 3000");
    
})
