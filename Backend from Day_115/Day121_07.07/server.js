const express = require('express')
const connectToDB = require('./src/db/db')

connectToDB()

const server = express()


///server connect to database server.js file 


server.use(express.json())

let notes = []


server.get('/',(req,res)=>{
    res.send("Hello Cohort..!")
})

//create notes
server.post('/notes',(req,res)=>{
    const{title,description} = req.body
    console.log(title,description);
    notes.push(req.body)
    res.json({
        message: "Note Added Successfully..",
        notes
    })
})

///show notes
server.get('/notes',(req,res)=>{
    //res.send(notes) /// two method working ...
    res.json(notes)
})

// delete notes
server.delete('/notes/:index',(req,res)=>{
    const index = req.params.index
    delete notes[index]
    res.json({
        message: `Note ${index} is deleted successfully .`
    })
})

//update notes
server.patch('/notes/:index',(req,res)=>{
    const index = req.params.index
    const {title} = req.body
    notes[index].title = title
    res.json({
        message: `Note ${index} is updated successfully .`
    })
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000 !");
    
})