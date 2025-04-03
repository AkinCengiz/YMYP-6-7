const button = document.querySelector("#first-button");
const outboxDiv = document.querySelector("#outbox");
const inboxDiv = document.querySelector("#inbox");

//console.log(button);

//MouseOver ve MouseOut
//Mouse Over => mouse ile elementin üzerine gelindiğinde yapılacak işlemleri tanımlamamızı sağlar
button.addEventListener("mouseover",function(){
    button.classList.remove("btn-danger");
    button.classList.add("btn-success");
})
//Mouse Out => mouse ile elementin üzerinden ayrıldığında yapılacak işlemleri tanımlamamızı sağlar
button.addEventListener("mouseout", () => {
    button.classList.remove("btn-success");
    button.classList.add("btn-danger");
})

button.addEventListener("click",btnClick);

function btnClick(){
    console.log("Click olayı tetiklendi...");
}

const btnDoubleClick = () => {
    console.log("Double Click olayı tetiklendi...");
}

button.addEventListener("dblclick",btnDoubleClick);

button.addEventListener("mousedown", () => {
    console.log("Mouse Down olayı tetiklendi...");
})

button.addEventListener("mouseup",function(){
    console.log("Mouse Up olayı tetiklendi...");
})

outboxDiv.addEventListener("mouseover",() => {
    console.log("Mouse Over");
})
outboxDiv.addEventListener("mouseout", () => {
    console.log("Mouse Out");
})

outboxDiv.addEventListener("mouseenter",() => {
    console.log("Mouse Enter");
})

outboxDiv.addEventListener("mouseleave",() => {
    console.log("Mouse Leave");
})