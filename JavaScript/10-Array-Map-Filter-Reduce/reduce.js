const numbers = [1,2,3,4,5,6,7,8,9,10];

const numbers2 = [1,9,15,4,7,26,12,13,6,2,35,34,22,54,75];

const sum = numbers.reduce((previous,current) => {
    return previous + current
},0);

console.log(sum)

const count = numbers.reduce((accumulator,current) => {
    accumulator++;
    return accumulator;
},0)
console.log(count);

const gratherThanTen = numbers2.reduce((prev,curr)=> {
    if(curr > 10){
        prev++;
    }
    return prev;
},0)

console.log(numbers2);
console.log(gratherThanTen);

const employees = [
    {username : "akincengiz",isActive:false,salary : 4000},
    {username : "abdulhadifirat",isActive:true,salary : 5000},
    {username : "emirhandumanli",isActive:false,salary : 6000},
    {username : "meltemsenol",isActive:true,salary : 7000},
    {username : "mertmetin",isActive:false,salary : 8000},
    {username : "meryemaydin",isActive:false,salary : 4500},
    {username : "metehanatalay",isActive:true,salary : 5500},
    {username : "neslihanyurttas",isActive:false,salary : 6500},
    {username : "sahinsenol",isActive:true,salary : 7500}
]

const totalSalary = employees.reduce((total,employee) => {
    if(employee.isActive){
        total += employee.salary;
    }
    return total;
},0)
console.log(employees)
console.log("Total Salary : ", totalSalary);