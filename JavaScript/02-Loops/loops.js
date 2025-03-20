//decision structures
/**
 * IF - ELSE IF - ELSE
 *
 * IF(KOŞUL){} => Eğer k
 */

let number1 = 13;
let number2 = 23;
let number3 = 13;

if (number1 == number3 || number1 == number2 || number2 == number3) {
  console.log("Üç değişken üzerinden en az iki değişken değeri birbirine eşit");
}
let total = number1 + number2;
console.log("Total : ", total);

if (number1 % 2 == 0) {
  console.log("Number1 değişkeni çift sayıdır : ", number1);
} else {
  console.log("Number1 değişkeni tek sayıdır : ", number1);
}

let number = 0;
if (number > 0) {
  console.log("Sayı pozitif : ", number);
} else if (number < -10) {
  console.log("Sayı -10 dan küçüktür :", number);
} else if (number < 0) {
  console.log("Sayı negatif : ", number);
} else {
  console.log("Sayı notr dür :", number);
}

//SWITCH
let ay = 9;

switch (ay) {
  case 1:
    console.log("Ocak");
    break;
  case 2:
    console.log("Şubat");
    break;
  case 3:
    console.log("Mart");
    break;
  case 4:
    console.log("Nisan");
    break;
  case 5:
    console.log("Mayıs");
    break;
  case 6:
    console.log("Haziran");
    break;
  case 7:
    console.log("Temmuz");
    break;
  case 8:
    console.log("Ağustos");
    break;
  case 9:
    console.log("Eylül");
    break;
  case 10:
    console.log("Ekim");
    break;
  case 11:
    console.log("Kasım");
    break;
  case 12:
    console.log("Aralık");
    break;
  default:
    console.log("Hatalı ay bilgisi");
    break;
}

switch (ay) {
    case 12:
      
    case 1:
      
    case 2:
      console.log("Kış");
      break;
    case 3:
      
    case 4:
      
    case 5:
      console.log("İlkbahar");
      break;
    case 6:
      
    case 7:
      
    case 8:
      console.log("Yaz");
      break;
    case 9:
      
    case 10:
      
    case 11:
      console.log("Sonbahar");
      break;
    default:
      console.log("Hatalı ay bilgisi");
      break;
  }

  let day = "Perşembe";

  switch (day) {
    case "Pazartesi":
    case "Salı":
    case "Çarşamba":
    case "Perşembe":
    case "Cuma":
        console.log("Hafta içi");
        break;
    case "Cumartesi":
    case "Pazar":
        console.log("Hafta sonu");
        break;
    default:
        console.log("Hatalı gün bilgisi");
        break;
  }

//   let deneme = 5
//   switch (deneme) {
//     case deneme > 0:
//         console.log("Pozitif")
//         break;
//     case deneme < 0:
//         console.log("Negatif")
//         break;
//     default:
//         console.log("0")
//         break;
//   }

//LOOPS

// 1 - FOR(başlangıç;koşul;güncelleme)

let start = 0;
let finish = 100;
let tutar = 0;

for(let i = start; i <= finish; i++){
    tutar += i;
}
console.log("FOR => Tutar : ", tutar);



// 2 - WHILE(KOŞUL) 
start = 0;
tutar = 0;
while(start <= finish){
    tutar += start;
    start++;
}
console.log("WHILE => Tutar : ", tutar);


tutar = 0;
start = 0;
for(;start <= finish;){
    tutar += start;
    start++;
}

console.log("WHILE-FOR => Tutar : ", tutar);

//(1,2,3,4,5,7,1,54,4)
let yas = 18;
while(yas <65){
    if(yas < 30){
        console.log("Daha gençsin...");
    }else if(yas < 50){
        console.log("Orta yaş...");
    }else{
        console.log("Artık yaşlandın...")
    }
    yas++;
}
let carpim = 1;

for(let i = 1;i <= 5;i++){
    carpim *= i;
}
//console.log("Çarpım Sonucu : ",carpim);


let doWhileValue = 15;
do{
    console.log("Do While Döngüsü çalıştı : ",doWhileValue);
    doWhileValue++;
}while(doWhileValue < 17);
doWhileValue = 15
while(doWhileValue < 17){
    console.log("While Döngüsü çalıştı : ",doWhileValue);
    doWhileValue++;
}

let counter = 0;

while(true){
    if(counter % 3 == 0){
        console.log("Döngü başa döndü",counter);
        counter++;
        continue;
    }
    if(counter > 20){
        console.log("Son iterasyon",counter);
        break;
    }
    // if(counter % 3 == 0){
    //     console.log("Döngü başa döndü",counter);
    //     counter++;
    //     continue;
    // }
    
    console.log("Döngü çalıştı...",counter);
    counter++;
}


const h1Element = document.getElementById("title");
h1Element.innerText = "Sayfa Başlığı";

const pElement = document.createElement("p");
pElement.innerText = "Akın CENGİZ";
const bodyElement = document.getElementById("body");
bodyElement.appendChild(pElement);
const ulList = document.createElement("ul");
const liElement = document.createElement("li");
liElement.innerText = "JavaScript";
ulList.appendChild(liElement);
bodyElement.appendChild(ulList);