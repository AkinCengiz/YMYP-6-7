const express = require("express");
const mongoose = require("mongoose");
const app = express();

const mainRoute = require("./routes");

const PORT = 5000;
const MONGO_URL = "mongodb+srv://akincengiz:Bjk1903+@akincengiz.khf0v.mongodb.net/Ymyp67MernStack"


const connect = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB connected...");
    } catch (error) {
        console.log(error);
    }
}
app.use(express.json());
app.use("/api",mainRoute);


app.listen(PORT,() => {
    connect();
    console.log(`Sunucu ${PORT} portu üzerinden yayında...`)
})