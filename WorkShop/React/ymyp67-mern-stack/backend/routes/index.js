const express = require("express");
const router = express.Router();

//Rotaları oluşturuyoruz (Route)
const categoryRoute = require("./categories");
const productRoute = require("./products");


//Rota bilgilerini url yolu olarak tanımlıyoruz
//localhost:5000/api/categories
router.use("/categories",categoryRoute);
//localhost:5000/api/products
router.use("/products",productRoute);


module.exports = router;