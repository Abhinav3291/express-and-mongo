const express =require("express");
const router = express.Router();

const Product  = require("/models/Product");


//get All the Products

router.get("/products" , async(req,res)=>{

   let products = await Product.find({})

   res.render("products/index",{products})


})

module.exports = router