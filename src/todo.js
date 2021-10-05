const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEYS = "todos";
const DONE_CLASSNAME = "done";

let toDos = [];

function saveToDos()    {
    localStorage.setItem(TODOS_KEYS, JSON.stringify(toDos));
}

function deleteTodo(event)   {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function updateTodo(id, target) {
    const idIndex = toDos.findIndex((toDo) => toDo.id === parseInt(id));
    toDos[idIndex] = target;
    saveToDos();
}

function doneTodo(event)    {
    const li = event.target.parentElement.parentElement;
    const span = event.target.nextSibling;
    console.log(li.id);
    const targetToDo = toDos.find((toDo) => toDo.id === parseInt(li.id));
    if(span.classList.contains(DONE_CLASSNAME))    {
        span.classList.remove(DONE_CLASSNAME);
        targetToDo.done = false;
    }
    else    {
        targetToDo.done = true;
        span.classList.add(DONE_CLASSNAME);
    }
    console.log(targetToDo, targetToDo.done);
    updateTodo(li.id, targetToDo);
}

function paintToDo(newTodo)    {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const div = document.createElement("div");
    const doneBtn = document.createElement("button");
    doneBtn.innerText = "✔️";
    doneBtn.addEventListener("click", doneTodo);
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    if(newTodo.done === true)   {
        span.classList.add(DONE_CLASSNAME);
    } else  {
        span.classList.remove(DONE_CLASSNAME);
    }
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", deleteTodo);
    li.appendChild(div);
    div.appendChild(doneBtn);
    div.appendChild(span);
    li.appendChild(deleteBtn);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
        done: false,
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEYS);

if(savedToDos !== null)  {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}