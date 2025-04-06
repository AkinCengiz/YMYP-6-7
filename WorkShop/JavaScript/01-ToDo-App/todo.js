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
function loadEventListener() {
  form.addEventListener("submit", addToDo);
  document.addEventListener("DOMContentLoaded", loadApp);
  todoList.addEventListener("click", deleteToDo);
  clearButton.addEventListener("click", clearToDoList);
  searchInput.addEventListener("keyup",searchToDo);
}

// 1. Adım To Do Ekliyoruz
function addToDo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    console.log("Boş değer girilemez...");
  } else {
    createToDoListItem(newTodo);
    addTodoToLocalStorage(newTodo);
  }
  e.preventDefault();
}

//2. Adım
function createToDoListItem(todo) {
  // <li class="list-group-item bg-dark text-light d-flex justify-content-between align-items-center"><span>HTML</span><i class="fa-solid fa-trash"></i></li>
  const todoItem = document.createElement("li");
  todoItem.className = "list-group-item bg-dark text-light";
  todoItem.classList.add(
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
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
function getTodosFromLocalStorage() {
  let todos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  return todos;
}

//4. Adım Local Storage Üzerine Yeni todo eklemek.
function addTodoToLocalStorage(todo) {
  let todos = getTodosFromLocalStorage();
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));

  // console.log(todos);
  // console.log(typeof todos);
}

// 5. Adım Sayfa ilk açılırken sayfada todoları göstermek
function loadApp() {
  let todos = getTodosFromLocalStorage();

  //console.log(todos);
  todos.forEach((todo) => {
    createToDoListItem(todo);
  });
}

// 6.Adım To Do Silme İşlemi Yapan Metot
function deleteToDo(e) {
  if (e.target.className === "fa-solid fa-trash") {
    //console.log(e.target.parentElement);
    e.target.parentElement.remove();

    //console.log(e.target.parentElement.firstChild.textContent);
    deleteToDoFromLocalStorage(e.target.parentElement.firstChild.textContent);
  }
}

// 7. Adım Local Storage Üzerinden Todo Silen Metot
function deleteToDoFromLocalStorage(deletedTodo) {
  let todos = getTodosFromLocalStorage();
  //console.log(todos);

  //FOREACH İLE DİZİYİ DOLAŞARAK İLGİLİ TODO ELEMANINI SİLMEK
  // todos.forEach((todo,index) => {
  //     //console.log(todo);
  //     if(todo === deletedTodo){
  //         todos.splice(index,1);
  //     }
  // })

  //FILTER İLE DİZİYİ FİLTRELEYEREK İLGİLİ TODO ELEMANINI SİLMEK
  todos = todos.filter((todo) => todo !== deletedTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 8. Adım Clear => Tüm TodoList bilgisini silen metot

function clearToDoList(e) {
  while (todoList.firstElementChild != null) {
    console.log(todoList.firstElementChild);
    todoList.removeChild(todoList.firstElementChild);
  }
  //console.log(todoList.firstElementChild);
  //localStorage.setItem("todos",[]);
  localStorage.removeItem("todos");
}

// 9. Adım Search Metodu
function searchToDo(e){
    const searchText = e.target.value.toLocaleLowerCase();
    const listToDoItems = document.querySelectorAll(".list-group-item");
    // console.log(searchText);
    // console.log(listToDoItems);
    listToDoItems.forEach(item => {
        //console.log(item.firstElementChild.textContent);
        const itemText = item.firstElementChild.textContent.toLocaleLowerCase();
        //console.log(itemText);
        
        //console.log(item);
        // idexOf(as) => Alaska (2 indeksi döner) Kars (-1 index döner)
        if(itemText.indexOf(searchText) === -1){
            //<li name="item" id="a" placeHolder="" class="list">JavaScript</li>
            item.setAttribute("style","display:none !important");
        }else{
            item.setAttribute("style","display:block");
        }
    })
}

/**
 * <!DOCTYPE html>
<html lang="tr">
<head>
    <style>
        div{
            bg-color : "red";
        }

        .card{
            bg-color : blue;        
        }
        #card-id{
            bg-color : black;
        }
    </style>
</head>
<body>
    <div class="container p-3">
        <div class="card">
            <div class="card bg-secondary text-light">ToDo App</div>
            <div id="card-id" class="card bg-dark text-light" id="first-body">
                <form id="todo-form">
                    <div class="mb-3">
                        <label for="todo-input" class="form-label">To Do</label>
                        <input type="text" class="form-control bg-danger text-light" id="todo-input" placeholder="To Do enter...">
                    </div>
                    <button class="btn btn-danger" id="add">Add To Do</button>
                </form>
            </div>
        </div>
    </div>
    <script src="todo.js"></script>
</body>
</html>
 * 
 * 
 * 
 * 
 * 
 * 
 */