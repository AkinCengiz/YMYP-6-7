class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFirstname(){
        console.log(this.firstname);
    }
    getLastname(){
        console.log(this.lastname);
    }
    getFullname(){
        return `${this.firstname} ${this.lastname}`;
    }
    toString(){
        console.log(`Firstname\t: ${this.firstname}\nLastname\t: ${this.lastname}`)
    }
}

const person1 = new Person("Akın","Cengiz");
console.log(person1);
console.log(person1.firstname);
person1.getFirstname();
person1.getLastname();
const fullname = person1.getFullname();
console.log("FullName : ",fullname);
person1.toString();

class Employee extends Person{
    constructor(firstname,lastname,salary){
        // this.firstname = firstname;
        // this.lastname = lastname;
        super(firstname,lastname);
        this.salary = salary;
    }
    getSalary(){
        console.log("Salary : ",this.salary);
    }
    toString(){
        console.log(`Firstname\t: ${this.firstname}\nLastname\t: ${this.lastname}\nSalary\t\t: ${this.salary}`);
    }
}

const employee = new Employee("Metehan","Atalay",35000);
employee.getFirstname();
employee.getLastname();
const employeeFullname = employee.getFullname();
console.log(employeeFullname);
employee.toString();
employee.getSalary();
console.log(employee);