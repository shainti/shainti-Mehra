const express = require('express');
const app = express();

app.get('/',(req, res, next)=>{
res.send(`hello my name is shainti
    <form action="/contect-us" method="POST">
    <input type="text" name="First-value" placeholder="Enter First value"/>
    <input type="text" name="Second-value" placeholder="Enter second value"/>
    <input type="submit" value="Click Here for calculate"/>
    </form>`);
});

app.post("/contect-us",(req, res, next)=>{
res.send('hello i am post');
});

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT,HOST, ()=>{
    console.log(`server start at http://${HOST}:${PORT}`);
})