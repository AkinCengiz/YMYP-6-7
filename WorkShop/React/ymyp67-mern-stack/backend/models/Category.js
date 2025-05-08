//MongoDB ile işlem yapabilmek için mongoose pakedini import ediyoruz
const mongoose = require("mongoose");

//Category tablo yapısını oluşturuyoruz

const categorySchema = new mongoose.Schema(
    {
        name : { type : String, required : true},
        image : { type : String, required : true}
    },
    {
        timestamps : true
    }
)

const Category = mongoose.model("Category",categorySchema);

module.exports = Category;