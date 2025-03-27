const numbers = [1,9,15,4,7,26,12,13,6,2,35,34,22,54,75];
let users = [
    {username : "akincengiz",isActive:false},
    {username : "abdulhadifirat",isActive:true},
    {username : "emirhandumanli",isActive:false},
    {username : "meltemsenol",isActive:true},
    {username : "mertmetin",isActive:false},
    {username : "meryemaydin",isActive:false},
    {username : "metehanatalay",isActive:true},
    {username : "neslihanyurttas",isActive:false},
    {username : "sahinsenol",isActive:true}
]

const evenlyNumbers = numbers.filter(number => number % 2 === 0);
console.log(numbers);
console.log(evenlyNumbers);

const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers)
console.log(users)

users = users.filter(user => user.username !== "akincengiz");
console.log(users)

// users = users.map(user => {
//     if(user.username !== "emirhandumanli"){
//         return user;
//     }
// })
console.log(users);

const userListElement = document.getElementById("user-list");
console.log(users);
users.map(user => (userListElement.innerHTML += `<li>${user.username}</li>`))