const factorial = (number) => {
    if(number <= 1){
        return 1;
    }
    return number * factorial(number - 1);
}

const recursive = (number) => {
    if(number == 0){
        return 0;
    }
    return number + recursive(number);
}



let result = factorial(3);
console.log(result);

const body = document.getElementById("body");
const h1Element = document.createElement("h1");
h1Element.innerText = `Factorial(5) : ${factorial(5)}`;
body.innerHTML += `<p>Akın CENGİZ</p>`;
body.append(h1Element);