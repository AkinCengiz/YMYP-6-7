console.log(Math.PI);

//MATH
const PISAYISI = Math.PI;
const EULER = Math.E;

console.log(PISAYISI);
console.log(EULER);

//MATH METHODS

let angle = 90;

//Sinus

console.log("Sinus : ",Math.sin(angle));
console.log("Cosinus : ",Math.cos(angle))
console.log("Tanjant : ",Math.tan(angle))

let number = -10;

console.log(Math.log10(number));
console.log(Math.LN2);

//EN SIK KULLANILAN METOTLAR
//ABS => Mutlak Değer
console.log(Math.abs(number));
//Sqrt() => Karekök
number = 25;
console.log(Math.sqrt(number));
//cbrt() => Küpkök
console.log(Math.cbrt(27));

//pow(a,b) => a üzeri b değerini verir
console.log(Math.pow(4,3));

//max() ve min()
console.log("Min : ", Math.min(5,15));
console.log("Max : ", Math.max(5,15));
console.log("Min : ", Math.min(5,15,7,9,16,23,24,12,87,3));
console.log("Max : ", Math.max(5,15,7,9,16,23,24,12,87,3));

//floor() - ceil() - round()
//floor() => Aşağı yuvarlama
console.log(Math.floor(3.42));
console.log(Math.floor(3.62));
console.log(Math.floor(3.97));
console.log(Math.floor(3.05));
console.log("*******************");
//ceil() => Yukarı yuvarlama
console.log(Math.ceil(3.42));
console.log(Math.ceil(3.62));
console.log(Math.ceil(3.97));
console.log(Math.ceil(3.05));
console.log("*******************");
//round() => En Yakın Tamsayıya yuvarlama
console.log(Math.round(3.42));
console.log(Math.round(3.62));
console.log(Math.round(3.97));
console.log(Math.round(3.05));

//random() => Rastgele sayı üretme (0 ile 1 arasında)
console.log(Math.random());
//0 - 100 arası rastgele sayı
console.log(Math.ceil(Math.random()*10));