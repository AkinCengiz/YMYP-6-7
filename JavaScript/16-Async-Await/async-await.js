function getData(){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Metot çalıştı");
        }, 3000);
    })
    let result = promise;
    return result;
}

getData().then(response => console.log(response)).catch(err => console.log(err));

async function getDataAsync(info){
    let promise = new Promise((resolve,reject)=> {
        setTimeout(()=> {
            if(typeof info === "number"){
                resolve(info);
            }else{
                reject(new Error("Sayısal bir değer giriniz..."));
            }
        },3000);
    });
    let result = await promise;
    return result;

}

getDataAsync(5).then(res => console.log(res)).catch(err => console.log(err));

 async function getApiData(url){
    //let newData;
    const response = await fetch(url);
    const data = await response.json();
    //newData = data;
    //let data2 = newData;
    console.log(data);
}

getApiData("https://fakestoreapi.com/products");