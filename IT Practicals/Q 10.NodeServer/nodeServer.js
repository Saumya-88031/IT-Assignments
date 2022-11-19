const http = require("http");

http.createServer(function(req, res){
        console.log("Server Running on designated port"),
        res.writeHead(200, {"Content-Type":"text/html"}),
        res.end("Hello Client. Server Seccessfully Running...")
}).listen(10000);