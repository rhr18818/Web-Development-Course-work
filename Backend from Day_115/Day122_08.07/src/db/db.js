const mongoose = require('mongoose')

function connectToDB(){
    mongoose.connect("mongodb+srv://rhr:v2FUZKaNlZMDZMC1@cluster0.kznhzvd.mongodb.net/cohort")
    .then(()=>{
        console.log("Connected to DB !");
        
    })
}

module.exports = connectToDB