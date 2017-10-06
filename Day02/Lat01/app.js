var vhttp = require('http'); 
var vurl = require('url');
var vfs = require('fs');

vhttp.createServer(function(req,res){
    res.writeHead(200,{"Content-Type" : "text/plain"});
    res.write("Selamat Datang di NodeJS \n");
    res.write("URLnya adalah "+req.url);
    res.end();
}).listen(8889);

console.log("Server is Running");
