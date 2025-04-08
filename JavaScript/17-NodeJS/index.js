const express = require("express");



const users = [
    {firstname : "Akın", lastname : "Cengiz"},
    {firstname : "Abdulhadi", lastname : "Fırat"},
    {firstname : "Emirhan", lastname : "Dumanlı"},
    {firstname : "Fırat", lastname : "Yılmaz"},
    {firstname : "Meltem", lastname : "Şenol"},
    {firstname : "Mert", lastname : "Metin"},
    {firstname : "Meryem", lastname : "Aydın"},
    {firstname : "Metehan", lastname : "Atalay"},
    {firstname : "Ömer Faruk", lastname : "Aygün"},
    {firstname : "Şahin", lastname : "Şenol"}
];

const products = [
    {name:"Bilgisayar",price:15000,stock:12},
    {name:"Cep Telefonu",price:12000,stock:15},
    {name:"Televizyon",price:10000,stock:7},
    {name:"Buzdolabı",price:9000,stock:5}
]
const cities = ["İstanbul","İzmir","Ankara","Gaziantep","Kahramanmaraş","Erzurum","Van","Artvin","Trabzon"];
let text = "Bu bir deneme metni";
let number = 15;
let isActive = true;

// console.log(users);
// console.log(text);
// console.log(number);
// console.log(isActive);

const port = 8080;

const app = express();


//http://localhost:8080/users
//http://localhost:8080/users
app.get("/users",(request,response) => {
    response.json(users);
});

//http://localhost:8080/products
app.get("/products",(req,res) => {
    res.json(products);
})

//http://localhost:8080/cities
app.get("/cities",(req,res) => {
    res.json(cities);
})


//http://localhost:8080/isactive
app.get("/isactive",(req,res) => {
    res.json(isActive);
})
app.listen(port,() => {
    console.log(`Uygulama ${port} portu üzerinden yayında... `);
})