const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/greet',(req,res)=>{
    console.log(req.body);
    res.send("welcome ");
})

app.listen(port,()=>{
    console.log(`listening on ${port}`);
})