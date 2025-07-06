const http = require('http')

// const server = http.createServer()//create server need to start now

///to show any response need to program for that---> what to show when request come 

const server = http.createServer((req,res)=>{
    res.end(`<h1>Hello from Server....!</h1>`);
    
})

server.listen(3000,()=>{
    console.log("Server is runnig on port number 3000");
})