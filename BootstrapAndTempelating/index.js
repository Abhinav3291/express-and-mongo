const express = require("express");
const app = express();

const PORT =2000;
app.set("view engine", "ejs")
const path = require("path");

app.set("views", path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
  let randomNumber=Math.floor(Math.random()*10);

  res.render("index",{randomNumber})
})

app.get("/blog",(req,res)=>{
  res.render("blog");
})

app.get("/todos",(req,res)=>{
  res.render("todos",{todos})
})
app.get("/", (req,res)=>{
    res.render("index")

})
app.listen(PORT,(req,res)=>{
  console.log(`server is running at port ${PORT}`)
})