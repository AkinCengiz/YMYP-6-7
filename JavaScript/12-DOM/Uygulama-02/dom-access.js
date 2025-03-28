//getElementsTagName
const h1Elements = document.getElementsByTagName("h1");
//h1Elements[0].innerText = "Değişen Başlık";
const divElements = document.getElementsByTagName("div");
const h2Elements = document.getElementsByTagName("h2");
console.log(h1Elements);
console.log(divElements);
console.log(h2Elements);

const numbers = [1];
console.log(numbers)
numbers[0] = 17;
console.log(numbers);

const faBrandsClassElements = document.getElementsByClassName("fa-brands");

console.log(faBrandsClassElements[2]);
console.log(faBrandsClassElements);

const menuElement = document.getElementById("menu");
console.log(menuElement);

const divElementQuery = document.querySelector("div");
console.log(divElementQuery);
const divElementsQuery = document.querySelectorAll("div");
console.log(divElementsQuery);

const faBrandsClassElementQuery = document.querySelector(".fa-brands")
console.log(faBrandsClassElementQuery);
const faBrandsClassElementsQuery = document.querySelectorAll(".fa-brands")
console.log(faBrandsClassElementsQuery);

const menuListElement = document.querySelector("#menu-list");
console.log(menuListElement);

const liElement = document.querySelector("#menu-list>li>a");
const liElements = document.querySelectorAll("#menu-list>li");
console.log(liElement);
console.log(liElements);

const liAllElements = document.querySelectorAll("li");
console.log(liAllElements);
const liClassElements = document.querySelectorAll("li.menu-list-item");
console.log(liClassElements)