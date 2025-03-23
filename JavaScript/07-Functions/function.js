//FUNCTIONS
//Parametresiz ve değer döndürmeyen
function writeHi(){
    console.log("Merhaba JavaScript...");
}
//Parametresiz ve değer döndürmeyen
function lorem(){
    console.log("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione fuga perferendis dicta distinctio illo. Tempora unde, vero vel aut ad illum aspernatur nulla quae suscipit quam repudiandae expedita. Repudiandae dignissimos consequatur tempora nobis quis deleniti voluptas repellendus esse, a eos facilis qui obcaecati sit quos iste, enim, eius sapiente aliquam?")
}

//Parametresiz ve değer döndüren
function loremValue(){
    return "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione fuga perferendis dicta distinctio illo. Tempora unde, vero vel aut ad illum aspernatur nulla quae suscipit quam repudiandae expedita. Repudiandae dignissimos consequatur tempora nobis quis deleniti voluptas repellendus esse, a eos facilis qui obcaecati sit quos iste, enim, eius sapiente aliquam?"
}

function getArray(){
    return [1,2,3,14,6];
}

writeHi();
lorem()
lorem();

let voidText = lorem();
let returnText = loremValue();
console.log("Void Text : ", voidText);
console.log("Return Text : ",returnText);

const numbers = getArray();
console.log(numbers);

let number1 = 15;
let number2 = 17;
let total = 0;

//Değer döndüren parametreli metot
function add1(number1, number2){
    return number1 + number2;
}
function add2(number1, number2){
    let total = number1 + number2;
    return total;
}
add2(number1,number2);
console.log(total);
total = add1(3,5);
console.log(add2(9,7));
console.log(total);

function stringFunction(string1,string2){
    console.log(`${string1} ${string2}`);
}

stringFunction("Akın","Cengiz");
let firstname = "Akın";
let lastname = "Cengiz";

stringFunction(firstname,lastname);
stringFunction(3,5);
//ARROW FUNCTION

const writeHiArrow = () => {
    console.log("ARROW => Merhaba JavaScript...");
}
const writeName = (name) => {
    console.log(`ARROW => ${name}`);
}
const writeName2 = name => {
    console.log(`ARROW => ${name}`);
}
const writeFullName = (firstname,lastname) => {
    console.log(`ARROW => ${firstname} ${lastname}`);
}

const writeFullName2 = (firstname,lastname) => console.log(`ARROW2 => ${firstname} ${lastname}`);

const addArrow = (number1,number2) => number1 + number2;

writeHiArrow();
writeName("Akın");
writeFullName2(firstname,lastname);

let result = addArrow(4,5);
console.log("Result : ", result)

