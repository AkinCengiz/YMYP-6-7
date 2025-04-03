const firstnameElement = document.querySelector("#firstname");
const lastnameElement = document.querySelector("#lastname");
const messageElement = document.querySelector("#message");
const titleElement = document.querySelector("#title");


function getEvent(e){
    console.log(e.type);
    console.log(e.target);
    //e.target.value = `${e.target.id}`;
}

function setFirstname(e){
    titleElement.innerHTML = e.target.value;
}
firstnameElement.addEventListener("focus",getEvent);
firstnameElement.addEventListener("blur",getEvent);
lastnameElement.addEventListener("focus",getEvent);
lastnameElement.addEventListener("blur",getEvent);

messageElement.addEventListener("copy",getEvent);
messageElement.addEventListener("cut",getEvent);
messageElement.addEventListener("paste",getEvent);
messageElement.addEventListener("select",getEvent);

firstnameElement.addEventListener("change",setFirstname)