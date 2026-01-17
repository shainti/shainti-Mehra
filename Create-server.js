const http = require('http');

const server=http.createServer(function (req, res){
console.log(req.headers);
})

const PORT = 4001;
server.listen(PORT ,()=>{
    console.log(`Server start at http://localhost:${PORT}`)});