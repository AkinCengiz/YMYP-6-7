const person1 = {
    firstname : "Akın",
    lastname : "Cengiz",
    email : "akincengiz@msn.com",
    getInfo : function(){
        console.log(this.firstname,this.lastname);
    }
}
console.log(person1);
person1.getInfo();

const person2 = {
    firstname : "Abdulhadi",
    lastname : "Fırat",
    email : "abdulhadifirat@msn.com"
}
console.log(person2);

const person3 = {
    firstname : "Emirhan",
    lastname : "Dumanlı",
    email : "emirhandumanli@msn.com"
}
person3.address = "İstanbul";
console.log(person3);

// const person = {
//     firstname : "Akın",
//     lastname : "Cengiz",
//     address : {
//         city : "İstanbul",
//         town : "Eyüp"
//     },
//     email : "akincengiz@msn.com",
//     programLanguages : ["C#","Java","JavaScript"],
//     isActive : true,
//     salary : 4000
// }



// function Person(){
//     this.firstname = "Akın";
//     this.lastname = "Cengiz";
// }
function Person(ad,soyad){
    this.firstname = ad;
    this.lastname = soyad;
    // this.getInfo = function(){
    //     console.log(this.firstname,this.lastname)
    // }
    // this.getName = function(){
    //     console.log(this.firstname);
    // }
}
Person.prototype.getLastname = function(){
    console.log("Lastname : ",this.lastname);
}
Person.prototype.getInfo = function(){
    console.log(this.firstname,this.lastname)
}
Person.prototype.getName = function(){
    console.log(this.firstname);
}
Person.prototype.toString = function(){
    console.log(`Firstname\t: ${this.firstname}\nLastname\t: ${this.lastname}`)
}

const per1 = new Person("Akın","Cengiz");
const per2 = new Person("Fırat","Yılmaz");
const per3 = new Person("Meltem","Şenol");
const per4 = new Person("Mert","Metin");
per1.getInfo();
per2.getInfo();
per1.getLastname();
per2.getLastname();
console.log(per2.toString());
//console.log(per2.deneme());

console.log(per1,per2,per3,per4);

//console.log(this);

function Employee(ad,soyad,salary){
    this.firstname = ad;
    this.lastname = soyad;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.getSalary = function(){
    console.log(this.salary);
}
Employee.prototype.toString = function(){
    console.log(`Firstname\t: ${this.firstname}\nLastname\t: ${this.lastname}\nSalary\t\t: ${this.salary}`);
}
const emp1 = new Employee("Meryem","Aydın",30000);
emp1.getInfo();
emp1.getLastname();
emp1.getName();
emp1.getSalary();
// console.log(emp1.toString());
// console.log(per2.toString());
emp1.toString();
per2.toString();
console.log(emp1);
console.log(per2);