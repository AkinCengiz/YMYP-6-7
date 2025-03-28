const numbers = [1,9,15,4,7,26,12,13,6,2,35,34,22,54,75];
const cities = ["İstanbul","İzmir","Ankara","Balıkesir","Nevşehir","Artvin","Muğla","Konya","Mardin","Erzurum"];

let number1 = numbers[0];
let number2 = numbers[1];
let number3 = numbers[2];
let number4 = numbers[3];

const [sayi1,sayi2,sayi3,sayi4] = numbers;

console.log(numbers);
console.log(number1,number2,number3,number4);
console.log(sayi1,sayi2,sayi3,sayi4);

const [istanbul,izmir,canakkale,balikesir] = cities;

console.log(cities);
console.log(istanbul,izmir,canakkale,balikesir);
const [city1,city2] = cities;
console.log(city1,city2);

const user = {
    isActive : true,
    firstname : "Akın",
    lastname : "Cengiz",
    email : "akincengiz@msn.com",
    city : "İstanbul",
    town : "Eyüp"
}

const {town:ilce,city:sehir,firstname:isim,lastname:soyisim,email:eposta} = user;
console.log(user);
console.log(isim,soyisim,eposta,sehir,ilce);

const [num1,num2,num3,...nums] = numbers;
console.log(numbers);
console.log("num1 : ",num1);
console.log("num2 : ",num2);
console.log("num3 : ",num3);
console.log("nums : ",nums);

const sayilar = [1,2,3,4,...numbers,...cities];
console.log(sayilar);


const {firstname:ad, lastname:soyad,...kullanici} = user;
console.log(user);
console.log(ad);
console.log(soyad);
console.log(kullanici);