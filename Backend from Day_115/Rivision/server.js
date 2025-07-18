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
server.get('/notes',async(req,res)=>{
    const notes = await noteModel.find()
    res.json({
        message:"Note fetched Successfully .!",
        notes
    })
})

server.delete('/notes/:id',async(req,res)=>{
    const noteId = req.params.id
    await noteModel.findOneAndDelete({
        _id: noteId
    })
    res.json({
        message: " Note Deleted Successfully ! "
    })
})
server.patch('/notes/:id',async(req,res)=>{
    const noteId = req.params.id
    const {title} = req.body
    await noteModel.findOneAndUpdate({
        _id: noteId
    },{
        title
    })
    res.json({
        message: " Note Updated Successfully ! "
    })
})

server.listen(3000,()=>{
    console.log("Server is running on Port - 3000");
    
})
