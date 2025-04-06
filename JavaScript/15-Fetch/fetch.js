function getTxtFilesData(){
    fetch("string.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.error(err))
}

getTxtFilesData();

function getJsonFilesData(){
    fetch("data.json")
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.error(error))
}
getJsonFilesData();

function getNorthwindProducts(url){
    fetch(url)
    .then(res => res.json())
    .then(products => console.log(products))
    .catch(err => console.error(err));
}

getNorthwindProducts("https://fakestoreapi.com/products");
getNorthwindProducts("https://dummyjson.com/products");
getNorthwindProducts("https://jsonplaceholder.typicode.com/todos");
getNorthwindProducts("https://northwind.vercel.app/api/products");