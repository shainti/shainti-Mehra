const http = require('http');
const { buffer } = require('stream/consumers');

const server = http.createServer(function(req, res){
    console.log(req.headers ,req.method ,req.url);

      if (req.url === '/' && req.method === 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="name" placeholder="Enter your name"/>');
        res.write('<input type="password" name="password" placeholder="Enter your password"/>');
        res.write('<input type="submit" value="Submit"/>');
        res.write('</form>');
        res.write('</body></html>');
        return res.end();
    }
else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST'){
const body = [];
req.on("data", chunk =>{ //req.on data mean when data is cooming send the data
body.push(chunk);// push the data into chunk 
});

req.on('end',()=>{ //req.on for listen and end for when the data is complete from the user then start eh function
const bufferdata = Buffer.concat(body).toString(); // accept the data and convert it into string
console.log(bufferdata)
const bodydata1 = new URLSearchParams(bufferdata) //search the data who are make for object
console.log(bodydata1);
const bodydata =  Object.fromEntries(bodydata1)//convert the string data to object
console.log(bodydata);
});
res.setHeader('Location','/');
res.statusCode=302;
return res.end();
}
});


const PORT = 3000;
const HOST = 'localhost';
server.listen(PORT,HOST,()=>{
    console.log(`Server start at http://${HOST}:${PORT}`);
});