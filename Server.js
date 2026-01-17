const Calculator =require('./Calculator');

const http = require('http');
//This imports Node.js built-in http module.
//It is used to create a web server and handle requests and responses.


const server = http.createServer(Calculator);  
// http.createServer() expects a request handler function.

const PORT = 3000;
//port are used for where we por

server.listen(PORT,()=>{
    console.log(`sever start at http://localhost:${PORT}`);
})
//This starts the server and tells it to listen on port 3000.
//Once the server starts successfully, the callback function runs.