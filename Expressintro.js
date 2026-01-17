const express = require('express');   //no require for http 
const app = express();



app.use((req, res, next) =>{  //req for take value // res for send res to client // next for go to next value
    console.log("come in middleware ", req.url ,req.method);
    res.send("welcome to my page");
})
app.use('/',(req, res, next)=>{   // we can set the path of the file in first of the line 

})


const PORT = 3000;
app.listen(PORT,()=>{  //listen with app no need for createserver and pass the pass
    console.log(`server start succefully http://localhost:${PORT}`);
})