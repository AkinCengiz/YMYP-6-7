//HTML Elementlerini seçerek bir değişkene atıyoruz..
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("#add");
const firstBody = document.querySelector("#first-body");
const secondBody = document.querySelector("#second-body");
const searchInput = document.querySelector("#search");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear");

//İlk yaptığımız işlem eventleri oluşturacak yapıyı kurmak
loadEventListener();
function loadEventListener(){
    form.addEventListener("submit",addToDo);
    document.addEventListener("DOMContentLoaded",loadApp);
}

// 1. Adım To Do Ekliyoruz
function addToDo(e){
    const newTodo = todoInput.value.trim();
    if(newTodo === ""){
        console.log("Boş değer girilemez...");
    }else{
        createToDoListItem(newTodo);
        addTodoToLocalStorage(newTodo);     
    }
    e.preventDefault();
}

//2. Adım
function createToDoListItem(todo){
    // <li class="list-group-item bg-dark text-light d-flex justify-content-between align-items-center"><span>HTML</span><i class="fa-solid fa-trash"></i></li>
    const todoItem = document.createElement("li");
    todoItem.className = "list-group-item bg-dark text-light";
    todoItem.classList.add("d-flex","justify-content-between","align-items-center");
    const spanElement = document.createElement("span");
    spanElement.appendChild(document.createTextNode(todo));
    todoItem.appendChild(spanElement);
    todoItem.innerHTML += `<i class="fa-solid fa-trash"></i>`;
    todoList.appendChild(todoItem);
    todoInput.value = "";
    todoInput.focus();

    //todoItem.textContent = newTodo;
    // todoItem.appendChild(document.createTextNode(newTodo));
    // todoList.appendChild(todoItem);
    //console.log(newTodo);
}

//3. Adım Local Storage üzerinden veri çekip değeri dönmek.
function getTodosFromLocalStorage(){
    let todos = localStorage.getItem("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        :[];
    return todos;
}

//4. Adım Local Storage Üzerine Yeni todo eklemek.
function addTodoToLocalStorage(todo){
    let todos = getTodosFromLocalStorage();
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));

    
        // console.log(todos);
        // console.log(typeof todos);
}

// 5. Adım Sayfa ilk açılırken sayfada todoları göstermek
function loadApp(){
    let todos = getTodosFromLocalStorage();

    //console.log(todos);
    todos.forEach((todo) => {
        createToDoListItem(todo);
    })

}