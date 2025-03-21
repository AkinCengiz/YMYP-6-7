let firstname = "Akın";
let lastname = "Cengiz";
let language = "JavaScript";

let fullname = firstname + " " + lastname;
let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel possimus iste alias sapiente. Animi illo eveniet perferendis fugiat totam voluptatibus dolores nemo quidem soluta. Et maxime ab at dolorem, quae fugiat rerum eius accusamus libero maiores cum adipisci velit perspiciatis minus magni aliquid praesentium? Atque, dolor cupiditate? Tenetur, numquam dicta."

let text2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " + firstname + " " + lastname + ". Vel possimus iste alias sapiente. Animi illo eveniet perferendis fugiat totam voluptatibus dolores nemo quidem soluta. Et maxime ab at dolorem, quae fugiat rerum eius accusamus libero maiores cum adipisci velit perspiciatis minus magni aliquid praesentium? " + language + " Atque, dolor cupiditate? Tenetur, numquam dicta."
console.log(fullname);
console.log(text2);

//STRING TEMPLATE LITERAL
text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. ${firstname} ${lastname} Vel possimus iste alias sapiente. Animi illo eveniet perferendis fugiat totam voluptatibus dolores nemo quidem soluta. Et maxime ab at dolorem, quae fugiat rerum eius accusamus libero maiores cum adipisci velit perspiciatis minus magni aliquid praesentium? ${language} Atque, dolor cupiditate? Tenetur, numquam dicta. Toplam = ${5+7}`;

console.log(text);

//METOTLARI VE ÖZELLİKLERİ
const charCount = firstname.length;
console.log(charCount);


//repeat() => String değişkenin kaç kez tekrar etmesi gerektiği parametre ile belirtilerek parametre değeri kadar tekrarlanır.
let repeat = "ŞAK ";

let repeatText = `Herkes bir anda ${repeat.repeat(5)} alkışlamaya başladı.`;
console.log(repeatText);
repeatText = "Herkes bir anda "+"ŞAK ".repeat(3) +"alkışlamaya başladı."
console.log(repeatText);

//split() => parametre olarak verilen değere göre stringin içeriğini parametre değerlerinden ayırarak dizi döner.
const splitValue = text.split(", ");
console.log(splitValue);

//toLowerCase() ve toUpperCase() => toLowerCase() metnin bütün karakterlerini küçük harfe ddönüştürür, toUpperCase metnin bütün karakterlerini büyük harfe dönüştürür.

console.log(text);
console.log(text.toLowerCase());
console.log(text.toUpperCase());

//trim() => Metnin başındaki ve sonudaki boşlukları kaldırır
//trimStart() => Metnin başındaki boşlukları kaldırır
//trimEnd() => Metnin sonundaki boşlukları kaldırır 
let trimText = "         Akın Cengiz              ";
console.log(trimText);
console.log(trimText.trim());
console.log(trimText.trimStart());
console.log(trimText.trimEnd());


//concat() => Parametre olarak verilen String değerleri birleştirerek döner.
const concatText = firstname.concat(" ",lastname);
console.log("Concat Text : ",concatText);

//slice() => Dizinin parametre ile verilen indeksinden belli bir kısmını almamızı sağlar
// 1. Kullanım : slice(5) => Dizinin 5. indksinden başlayarak sonuna kadar olan kısmı döner.
console.log(fullname);
let newText = fullname.slice(3);
console.log(newText);
newText = fullname.slice(3,7);
console.log(newText);

//includes() => Parametre ile verilen değerin metinde olup olmadığını döner.
console.log(text)
let varMi = text.includes("Akın");
console.log(varMi);
varMi = text.includes("fugiat");
console.log(varMi);

//startsWith() ve endsWith()

varMi = fullname.startsWith("Akın");
console.log("Akın",varMi)
varMi = fullname.startsWith("Ce");
console.log("Ce",varMi)

varMi = fullname.endsWith("iz");
console.log("iz",varMi)
varMi = fullname.startsWith("ın");
console.log("ın",varMi)


//replace() => Metnin içerisindeki ilk parametre ile verilen değeri ikinci parametre ile değiştirir.
let metin = "Html,Css,JavaScript,React,CSharp";
console.log(metin)
metin = metin.replace(",","-");
console.log(metin);
metin = metin.replaceAll(",","-");
console.log(metin);
metin = metin.replaceAll("s","S");
console.log(metin);
metin = metin.replaceAll("a","A");
console.log(metin);