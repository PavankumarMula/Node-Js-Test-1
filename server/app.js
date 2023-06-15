const express=require("express");
const app=express();
const bodyParser=require('body-parser');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.json("hi from backend");
})

app.listen(4000,()=>{
    console.log("server is listening at port 4000")
})