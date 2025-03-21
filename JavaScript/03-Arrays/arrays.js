const numbers = [1,2,3,4,5];
const cities = ["İstanbul","İzmir","Ankara","Eskişehir","Sakarya","Erzurum","Malatya"];
const mixed = ["Akın",1,3,5,10.7,true,["İstanbul","Trabzon"],{firstname:"Akın",lastname:"Cengiz"},false];



console.log(numbers)
console.log(cities)
console.log(mixed)

console.log("Numbers[2] : ",numbers[2])

//DİZİ METOTLARI
//push() => Dizinin sonuna parametre ile verilen elemanı ekler...
numbers.push(11);//1,2,3,4,5,11
console.log(numbers);
numbers.push(7,19,37);
console.log(numbers);//1, 2, 3, 4, 5, 11, 7, 19, 37
//pop() => Dizinin sonundan bir eleman siler. Ve bu elemanı döner.
const deleted = numbers.pop();
const deneme = console.log("Deneme");
console.log(deneme);
console.log(numbers);
console.log(deleted);

//shift() => Dizinin başından eleman siler ve sildiği elemanı döner
const firstDeleted = numbers.shift();
console.log(numbers);
console.log(firstDeleted);

//unshift() => Dizinin başına eleman ekler.
numbers.unshift(34);
console.log(numbers);
numbers.unshift(17,22,54);
console.log(numbers);

//slice() => Dizinin parametre ile verilen indeksinden belli bir kısmını almamızı sağlar
// 1. Kullanım : slice(5) => Dizinin 5. indksinden başlayarak sonuna kadar olan kısmı döner.
const numbers2 = numbers.slice(5);
console.log(numbers);
console.log(numbers2);

// 2. Kullanım : slice(a,b) => Dizinin a. indeksinden başlayarak b. indexine kadar olan kısmı döner.(a dahil b hariçtir.)
const numbers3 = numbers.slice(3,7);
console.log(numbers);
console.log(numbers3);


//reverse() => Dizinin elemanlarını tersten sıralar. Orjinal dizinin elemanları etkilenir.
console.log(numbers);
numbers.reverse();
console.log(numbers);

//concat() => Dizileri birleştirip birleştirilmiş halini döner.
const concat1 = [1,3,5,7,9];
const concat2 = [0,2,4,6,8];
const concat = concat1.concat(concat2);
console.log("Concat1 : ",concat1);
console.log("Concat2 : ",concat2);
console.log("Concat : ",concat);

//indexOf() => Parametre olarak verilen değerin dizide olup olmadığını konrol eder. Eğer varsa ilk bulunduğu index değeri eğer yoksa -1 değerini döner.

console.log(concat.indexOf(5));
console.log(concat.indexOf(4));
console.log(concat.indexOf(14));

console.log(cities);
console.log("İstanbul",cities.indexOf("İstanbul"));
console.log("Sakarya",cities.indexOf("Sakarya"));
console.log("Rize",cities.indexOf("Rize"));

const newArray = [1,7,4,11,8,6,4,7,1,6,22,11,9,5,11];
console.log(newArray);
console.log(newArray.indexOf(11));
console.log(newArray.indexOf(6));

//lastIndexOf() => Parametre olarak verilen değerin dizide olup olmadığını konrol eder. Eğer varsa son bulunduğu index değeri eğer yoksa -1 değerini döner.
console.log(newArray);
console.log("Last 11 : ",newArray.lastIndexOf(11));
console.log("Last 6 : ",newArray.lastIndexOf(6));
console.log("Last 60 : ",newArray.lastIndexOf(60));


//join() => Dizinin elemanların eğer parametresiz kullandıysak , ile birleştirerek string bir değer oluşturur, eğer parametre verirsek dizinin elemanlarını parametre ile verilen değer ile birleştirerek strind bir değer döner.
console.log(newArray, typeof newArray);
let newString = newArray.join();
console.log(newString, typeof newString);
newString = newArray.join("-");
console.log(newString);
newString = newArray.join(" * ");
console.log(newString);
newString = newArray.join(" <> ");
console.log(newString);

//sort() => Dizinin elemanlarını sıralar. sort() biçiminde kullanıldığında sözlük mantığı ile sıralar.
console.log(newArray);
console.log(newArray.sort());
console.log(cities);
console.log(cities.sort());

console.log(newArray.sort(function(small,big){
    return small - big;
}));
console.log(newArray.sort(function(a, b){return a-b}))

console.log(newArray.sort((small,big) => {
    return big - small;
}))

//DEĞER DÖNEN VE DÖNMEYEN METOT KAVRAMI
// const getNumber = () => {
//     return 5;
// }

// const numberGet = getNumber();
// //const numberGet = 5;
// console.log(numberGet);