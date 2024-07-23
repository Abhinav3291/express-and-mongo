const express = require('express')
const app = express()
const port = 3000
const path = require("path");
const mongoose = require("mongoose");
const colors = require("colors")
const ejsMate= require("ejs-mate")


mongoose.connect("mongodb://127.0.0.1:27017/webdevdb")
.then(()=> console.log("dbs connected successfuly".blue))
.catch((err)=> console.log(err));

app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))


//Routes

const productRoutes = "./routes/productRoutes.js";


// app.get("/products",(req,res)=>{
//     res.render("products/index")
// })


app.use("/products", productRoutes)

app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))