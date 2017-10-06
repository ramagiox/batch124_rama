var vhttp = require('http'); 
var vurl = require('url');
var vfs = require('fs');

vhttp.createServer(function(req,res){
    var akses=vurl.parse(req.url);
    if(akses.pathname=="/"){
        res.writeHead(200,{
            "content-type":"text/html"
        });
        alamat="./Lat01/index.html";
        vfs.createReadStream(alamat).pipe(res);
    } else{
        res.writeHead(404,{"Content-Type" : "text/plain"});
        res.write("Alamat tidak ada \n");
        res.write("URLnya adalah "+req.url);
        res.end();
    }
   
}).listen(8889);

console.log("Server is Running");
