let date = new Date();

console.log(date);

let date2 = new Date(2020,0,18,19,22,45,456);
console.log(date2);

let day = date.getDay();
console.log(day);

switch(day){
    case 0:
        console.log("Pazar");
        break;
    case 1:
        console.log("Pazartesi");
        break;
    case 2:
        console.log("Salı");
        break;
    case 3:
        console.log("Çarşamba");
        break;
    case 4:
        console.log("Perşembe");
        break;
    case 5:
        console.log("Cuma");
        break;
    case 6:
        console.log("Cumartesi");
        break;
}
//YIL BİLGİSİ
console.log(date.getFullYear());
date.setFullYear(2023);
console.log(date.getFullYear());
//AY BİLGİSİ
console.log(date.getMonth());
date.setMonth(7);
console.log(date.getMonth());
//GÜN BİLGİSİ
console.log(date.getDate());
date.setDate(7);
console.log(date.getDate());
//SAAT BİLGİSİ
console.log(date.getHours());
date.setHours(17);
console.log(date.getHours());
//DAKİKA BİLGİSİ
console.log(date.getMinutes());
date.setMinutes(19);
console.log(date.getMinutes());
//SANİYE BİLGİSİ
console.log(date.getSeconds());
date.setSeconds(28);
console.log(date.getSeconds());


console.log(date);

console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());