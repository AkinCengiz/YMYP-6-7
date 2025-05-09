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

//******************************************** */
//GET CATEGORIES ENDPOINT START

router.get("/", async (req,res) => {
    try {
        const categoryList = await Category.find();
        res.status(200).json(categoryList);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server error..."});
    }
})

//GET CATEGORIES ENDPOINT END
//******************************************** */
//GET CATEGORY BY ID ENDPOINT START
//localhost:5000/api/categories/1245638sdasd
router.get("/:categoryid",async (req,res) => {
    try {
        const categoryId = req.params.categoryid;
        const category = await Category.findById(categoryId);
        res.status(200).json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server error..."});
    }
})

//GET CATEGORY BY ID ENDPOINT END
//******************************************** */

//UPDATE CATEGORY ENDPOINT START

router.put("/",async (req,res) => {
    try {
        const updateCategoryInfo = req.body;
        const category = await Category.findById(updateCategoryInfo._id);
        if(!category){
            return res.status(404).json({error : "Category not found"});
        }
        const updatedCategory = await Category.findByIdAndUpdate(category._id,updateCategoryInfo);
        res.status(200).json(updatedCategory);
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server error..."});
    }
})

//UPDATE CATEGORY ENDPOINT END
//******************************************** */
//DELETE CATEGORY ENDPOINT START

router.delete("/",async (req,res) => {
    try {
        const deleteCategoryInfo = req.body;
        const deletedCategory = await Category.findByIdAndDelete(deleteCategoryInfo._id);
        if(!deletedCategory){
            return res.status(404).json({error : "Category not found"});
        }
        res.status(200).json({Message : "Category deleted..."});
    } catch (error) {
        console.log(error);
        res.status(500).json({error : "Server error..."});
    }
})

//DELETE CATEGORY ENDPOINT END
//******************************************** */


module.exports = router;