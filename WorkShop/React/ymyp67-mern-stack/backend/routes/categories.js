const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

//CREATE CATEGORY ENDPOINT START
router.post("/",async(req,res) => {
    try {
        const {name,image} = req.body;
        const newCategory = new Category({name,image});
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server error..."});
    }
})
//CREATE CATEGORY ENDPOINT END



module.exports = router;