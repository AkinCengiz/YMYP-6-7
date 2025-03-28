const bodyElement = document.querySelector("#body");
console.log(bodyElement)
const containerElement = document.querySelector(".container");
console.log(containerElement);

const newH1Element = document.createElement("h1");
//<h1>Yeni Eklediğim Başlık</h1> => innerText elementin text değerini atar
newH1Element.innerText = "Yeni Eklediğim Başlık";

const newPElement = document.createElement("p");
newPElement.className = "text-red";
newPElement.classList.add("f-xl");
newPElement.classList.remove("text-red");
newPElement.classList.add("text-ligth");
newPElement.style.backgroundColor = "black";
newPElement.style.padding = "15px";

newPElement.innerHTML = `
    <strong>Paragraf başlıyor</strong> <em>Lorem ipsum dolor sit amet consectetur adipisicing elit.</em> Nam, sapiente tempore illum quis magni architecto expedita quae molestiae cumque. <br/>Mollitia iste quam culpa ullam minus!
`;
const contentElement = document.getElementById("content");
contentElement.prepend(newPElement);

bodyElement.appendChild(newH1Element);
containerElement.prepend(newH1Element);