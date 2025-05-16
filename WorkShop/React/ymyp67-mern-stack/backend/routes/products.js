const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

//CREATE PRODUCT
router.post("/", async(req,res) => {
    try {
        const newProduct = new Product(req.body);
        newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası : "})
    }
});

//GET PRODUCTS
router.get("/",async(req,res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası : "})
    }
})
//GET BY ID PRODUCT
router.get("/:productid", async (req,res) => {
    try {
        const productId = req.params.productid;
        const product = await Product.findById(productId);
        if(!product){
            return res.status(404).json({error : "Ürün bulunamadı..."});
        }
        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası : "})
    }
})

//UPDATE PRODUCT
router.put("/:productid", async(req,res) => {
    try {
        const productId = req.params.productid;
        const updateInfo = req.body;

        const updatedProduct = await Product.findById(productId);
        if(!updatedProduct){
            res.status(404).json({error : "Ürün bulunamadı..."});
        }
        const updated = await Product.findByIdAndUpdate(productId,updateInfo);
        res.status(200).json(updated);


    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası : "})
    }
})

//DELETE PRODUCT
router.delete("/:productid", async(req,res) => {
    try {
        const productId = req.params.productid;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if(!deletedProduct){
            return res.status(404).json({error : "Ürün bulnamadı..."});
        }
        res.status(200).json(deletedProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Sunucu hatası : "})
    }
})

module.exports = router;