function getInfo(info){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if(info % 2 == 0)
            {
                resolve(info);
            }else{
                reject(info);
            }
        },3000);
    })
}

//console.log(getInfo(2));

function isText(data){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            if(typeof data === "string"){
                resolve(data);
            }else{
                reject("String bir değer girmelisiniz...");
            }
        },3000)
    })
}

//console.log(isText(15));
//console.log(isText("15"));

//isText("Deneme metni").then(response => console.log(response)).catch(err => console.error(err))
//isText(25).then(response => console.log(response)).catch(err => console.error(err))

function calculateSquare(number){
    return new Promise((resolve,reject) => {
        if(typeof number === "number"){
            resolve(number ** 2);
        }else{
            reject(new Error());
        }
    })
}

calculateSquare(5)
.then(res => {
    console.log("İlk then bloğu : ",res);
    return res ** 2;
})
.then(res => {
    console.log("İkinci then bloğu : ",res)
    return  Math.sqrt(res);
})
.then(res => console.log("Son then bloğu : ",res))
.catch(err => console.error(err));
//calculateSquare("Akın").then(res => console.log(res)).catch(err => console.error(err));