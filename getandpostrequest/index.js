const express = require('express')
const app = express()
const port = 3000
 
app.set("view engine", "ejs")
const path = require("path");

app.set("views", path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))
app = express.json();
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/userdetails",(req,res)=>{
    console.log(req.query)
    res.send("get request completed");
    
})
app.post("/userdetails",(req,res)=>{

    console.log(req.body)
    res.send("post request completed")
})

app.listen(port ,(req,res)=>{
console.log(`server is on the port ${port}`);
})