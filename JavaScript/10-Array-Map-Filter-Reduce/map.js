const numbers = [1,9,15,4,7,26,12,13,6,2,35,34,22,54,75];

//ForEach() => Dizi elemanlarını tek tek dolaşır
numbers.forEach((number,index) => {
    console.log(`${index + 1}. Eleman\t:`,number)
});

// const newArray = numbers.forEach(number => {
//     return number;
// })
// console.log(newArray);

const newNumbers = numbers.map(number => {
    return number;
})

const numbers2 = numbers.map(number => {
    return number*2;
})
// numbers.push(100);
console.log("Numbers :",numbers);
console.log("NewNumbers",newNumbers);
console.log("Numbers2",numbers2);

const notes = [55,67,89,63,100,78,92,96,45,32,71,69,83];

const calculateNotes = notes.map(note => {
    return note * 0.4;
});
notes.forEach(note => {
    console.log(note*0.4);
})
console.log(notes);
console.log(calculateNotes);

const numbers3 = [1,2,3,4,5,6,7,8,9,10];
const squareNumbers = numbers3.map(item => {
    return item ** 2;
})
console.log(numbers3);
console.log(squareNumbers);
