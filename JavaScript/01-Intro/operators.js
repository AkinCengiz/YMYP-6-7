//ARİTMETİK OPERATÖRLER

// + - * / %
/**
 * ( + ) => Toplama
 * ( - ) => Çıkarma
 * ( * ) => Çarpma
 * ( / ) => Bölme
 * ( % ) => Mod Alma
 * ( ** ) => Üs Alma
 * 
 *  ( ++ ) => 1 arttır
 *  ( -- ) => 1 azalt
 *  ( += ) => Topla ve ata
 *  ( -= ) => Çıkar ve ata
 *  ( *= ) => Çarp ve ata
 *  ( /= ) => Böl ve ata
 *  ( %= ) => Mod al ve ata
 *  ( **= ) => Üs al ve ata
 */

let number1 = 5;
let number2 = 7;

let result = number1 + number2;
result = number1 - number2;
result = number1 * number2;
result = number2 / number1;
result = number2 % number1;


//number1 = number1 + 1;
//Değişkenin önüne ya da arkasına ++ koyarak değerini 1 arttırırız.
number1++;
++number1;
//Aşağıdaki gibi bir değişkene number1++ şeklinde atama yaparsak önce number1 değerini değişkene atar sonra number1 değişkeninin değerini 1 arttırır
result = number1++;
//Result 7 Number1 8
//Aşağıdaki gibi bir değişkene ++number1 şeklinde atama yaparsak önce number1 değişkeninin değerini 1 arttırır sonra number1 değerini değişkene atar
result = ++number1;

result = number2--;
result = --number2;
console.log("Result : ", result);
console.log("Number1 : ", number1);
console.log("Number2 : ", number2);

//number1 = number1 + 5;
number1 += 5; //14
number1 -= 7; // 7
number1 *= 3; // 21
number1 /= 7; // 3
number1 = 39;
number1 %= 6; // 3
result = number1 ** 4;
number1 **= 4;
console.log("Number1 : ", number1);
console.log("Result : ", result);

//KARŞILAŞTIRMA OPERATÖRLERİ

/**
 *  ( == ) => Eşitlik kontrolü değerler eşit ise true değil ise false (Değişken tiplerinin bir önemi yoktur.)
 *  ( === ) => Eşitlik kontrolü değerler eşit ise true değil ise false (Değişken türlerinin önemi vardır. Değerler ile birlikte tiplerinde aynı olması gerekir.)
 * 
 *  ( != ) => Operatörün her iki tarafındaki değerlerin eşit olmadığı durumlarda true eşit olduğu durumlarda ise false değeri döner 
 *  ( < ) => Operatörün solundaki değişken değerinin sağ taraftaki değişken değerinden küçük olduğu durumlarda true diğer durumlarda false değerini döner
 * 
 * ( <= ) => Operatörün solundaki değişken değerinin sağ taraftaki değişken değerinden küçük ya da eşit olduğu durumlarda true diğer durumlarda false değerini döner
 * 
 * ( > ) => Operatörün solundaki değişken değerinin sağ taraftaki değişken değerinden büyük olduğu durumlarda true diğer durumlarda false değerini döner
 * 
 * ( >= ) => Operatörün solundaki değişken değerinin sağ taraftaki değişken değerinden büyük ya da eşit olduğu durumlarda true diğer durumlarda false değerini döner
 */


let numberType = 13;
let stringType = "13";
let numberType2 = 13;

if(numberType == stringType){
    console.log(numberType," = ",stringType);
}

if(numberType === stringType){
    console.log(numberType," = ",stringType);
}else{
    console.log(numberType," != ",stringType);
}

if(numberType === numberType2){
    console.log(numberType," = ",numberType2);
}


if(numberType % 2 === 0){
    console.log("Sayı çift : ", numberType);
}else{
    console.log("Sayı tek : ", numberType);
}


if(13 != 15){
    console.log("Eşit değil");
}


if( 13 < 15 ){
    console.log("13 küçüktür 15");
}

if( 13 <= 15 ){
    console.log("13 küçük ya da eşit 15");
}
if( 13 <= 13 ){
    console.log("13 küçük ya da eşit 13");
}

if( 15 > 13 ){
    console.log("15 büyük 13");
}
if( 13 >= 13 ){
    console.log("13 büyük ya da eşit 13");
}
/**
 * 
 * 
 * bakiye = 12000;
 * 
 * bakiye *= 0,1;
 * bakiye *= 1,1;
 * 
 * 
 */