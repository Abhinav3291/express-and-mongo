const express = require("express");

const app = express();
const path = require("path");
app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"))

//get request to view my tempelate
app.get("/hello",(req,res)=>{

    res.render("index")
})
app.listen("2000",(req,res)=>{
    console.log("server starting at 2000");
})