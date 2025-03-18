// VAR, LET, CONST

var firstname = "Akın";
var lastname = "Cengiz";
var isDelete = false;
var year = 2025;
var balance = 1500.50;

var text = "15";
console.log(text, typeof text)
text = 15;
console.log(text, typeof text)
text = true;
console.log(text, typeof text)

var PI = 3.14;
console.log(PI, typeof PI);

//LET
let isim = "Akın";
let soyisim = "Cengiz";
let yil = 2025;
console.log(isim, typeof isim);
isim = true;
console.log(isim, typeof isim);

//CONST 
const PISAYISI = 3.14;
console.log(PISAYISI, typeof PISAYISI);
//PISAYISI = 3;
console.log(PISAYISI, typeof PISAYISI);
console.log(soyisim);

const fullname = "Akın CENGİZ";
console.log(fullname, typeof fullname);
// fullname = "CENGİZ";
// console.log(fullname, typeof fullname);

const numbers = [10,5,3,7,9,11];
console.log(numbers);
numbers.push(17);
console.log(numbers);
numbers.pop();
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
let numbers2 = [1,3,5];
numbers = numbers2;
console.log(numbers);