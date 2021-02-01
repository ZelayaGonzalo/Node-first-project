var http = require('http')
var url = require('url');
var fs = require('fs');

http.createServer(function (req,res){
    let dir = req.url.substring(1)
    if(dir === ""){
        dir = "index"
    }
    console.log(dir)
    fs.readFile(`${dir}.html`,function (err,data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080)