//keypress() => Numeric, alphanumeric ve character tuşlarında çalışır. (ASCHI code karşılığı olan tuşlarda çalışır.)
document.addEventListener("keypress",getKeyEvents);

document.addEventListener("keydown",getKeyEvents);

document.addEventListener("keyup",getKeyEvents);

function getKeyEvents(e) {
    console.log(e.which,e.key,e.type);
}

