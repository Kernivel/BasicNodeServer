const http = require('http');
const fs = require('fs');
const port = 3000;


let server = http.createServer((req,res) => {
    //console.log(`request from ${req.headers}`);
    //console.log(req.url);
    const parsedUrl = req.url.slice(1);
    if(parsedUrl === ""){
        fs.readFile('src/index.html',(err,data) =>{
            if(err){
                res.writeHead(404,err.message);
                res.end();
            }else{
                res.writeHead(200,{'Content-type':'text/html;charset = utf-8'});
                res.write(data);
                res.end();
            }
            
        })
    }else if(parsedUrl.endsWith('.js')){
        fs.readFile(parsedUrl,(err,data) =>{
            if(err){
                res.writeHead(404,err.message);
                res.end();
            }else{
                res.writeHead(200,{'Content-type':'text/jsx;charset = utf-8'});
                res.write(data);
                res.end();
            }
        })
    }else{
        res.writeHead(403);
        res.end();
    }
}).listen(port);


/*createServer() and server.on() can be used both to define the callback when a request is made
/*
let server = http.createServer((req,res)=>{
    fs.readFile('src/index.html',(err,data)=>{
        if(err){
            res.writeHead(404,err.message);
            res.end("No html file");
        }
        
        res.writeHead(200,{'Content-type':'text/html;charset = utf-8'});
        res.write(data);
        res.end();
    });
    
}).listen(port);

server.on('request',(req,res) =>{
    let query = req.url.slice(1);
    res.writeHead(200);
    console.log(`Query is ${query}`);
    if(query.length>0){
        fs.readFile(query,(err,data)=>{
            console.log('In readfile');
            if(err){
                console.log('err');
                res.writeHead(404);
                res.end(`No file: ${err.message}`);
            }else{
                console.log('no err');
                res.writeHead(200,{'Content-type':'text/javascript'});
                res.write(data);
            }
            res.end();
        })
    }
    
    
})*/