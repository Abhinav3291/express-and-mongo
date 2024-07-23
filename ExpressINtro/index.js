const express = require("express")

const app = express()

//console.log(app)
app.use((req,res)=>{
    console.log("request is coming");

})

app.get("/",(req,res)=>{
    res.status(200).send("Home route!")
})
app.get(" * ",(req,res)=>{
    res.status(500).send("file  not found")
})

app.listen("7000",(req,res)=>{
    console.log("server is running at port 7000")
})