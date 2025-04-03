const container = document.querySelector(".container#main");

const inputElement = document.querySelector("#city");

const addButton = document.querySelector("#add");
const updateButton = document.querySelector("#update");
const deleteButton = document.querySelector("#delete");
const clearButton = document.querySelector("#clear");

const cityList = document.querySelector("#city-list")
//console.log(container)

let cities;
updateButton.addEventListener("click",()=> {
    console.log(cities);
    console.log(localStorage.getItem("cities"));
})

addButton.addEventListener("click", () => {
    let city = inputElement.value.trim();
    if(localStorage.getItem("cities") === null){
        cities = [];
    }else{
        //cities = localStorage.getItem("cities");
        cities = JSON.parse(localStorage.getItem("cities"));
    }
    if(cities.includes(city)){
        console.log("Girilen şehir ismi zaten mevcut!!!");
    }else{
        cities.push(city);
    }
    // console.log(cities);
    //localStorage.setItem("cities",cities);
    localStorage.setItem("cities",JSON.stringify(cities));
    inputElement.value = "";
    inputElement.focus();
    createCityUI();
});

const createCityUI = () => {
    let newCities = JSON.parse(localStorage.getItem("cities"));
    cityList.innerHTML = "";
    newCities.forEach((city) => {
        cityList.innerHTML += `
            <li class="list-group-item bg-secondary text-light">${city}</li>
        `;
    })
}
createCityUI();