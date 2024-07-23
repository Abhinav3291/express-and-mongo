const mongoose = require("mongoose");
const Product =require("/models/Product")

mongoose.connect("mongodb://127.0.0.1:27017/webdevdb")
.then(()=> console.log("dbs connected successfuly".blue))
.catch((err)=> console.log(err));


const products =[
    {
      name: "iphone 15",
      img: "https://images.unsplash.com/photo-1695048132832-b41495f12eb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
       price : 300 ,
       desc : "The iPhone 15 display has rounded corners that follows a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 15.54 cm (6.12″) diagonally (actual viewable area is less)."

    },
    {
      name: "Samsung S24 Ultra",
      img: "https://d2xamzlzrdbdbn.cloudfront.net/products/e81e9068-1627-4a02-aa05-5bbd259f3c2a24181130_416x416.jpg",
       price : 300 ,
       desc : "The Galaxy S24 Ultra display has rounded corners that follows a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 15.54 cm (6.12″) diagonally (actual viewable area is less)."

    },
    {
      name: "Google Pixel 8",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRifnrSees6YUIMHK9JA0mKi00IfSNiPCrnXQ&s",
       price : 300 ,
       desc : " display has rounded corners that follows a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 15.54 cm (6.12″) diagonally (actual viewable area is less)."

    },
    {
      name: "one Plus 12",
      img: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2024/01/oneplus-12-product-feature.png",
       price : 300 ,
       desc : "The iPhone 15 display has rounded corners that follows a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 15.54 cm (6.12″) diagonally (actual viewable area is less)."

    },
    {
      name: "Samsung Galaxy s23",
      img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/u/i/d/-original-imagzm8qbwwyyvhf.jpeg?q=90&crop=false",
       price : 300 ,
       desc : "The iPhone 15 display has rounded corners that follows a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 15.54 cm (6.12″) diagonally (actual viewable area is less)."

    },
]

 async function seedProducts(){

    await Product.deleteMany({});
     await Product.insertMany(products);

    console.log("products has been seeded successfully")
}

seedProducts()