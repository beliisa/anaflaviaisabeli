
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const filter = document.querySelector("#filter-select")



const saveTodo = (text, done = 0, save = 1) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  todo.appendChild(doneBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("remove-todo");
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  todo.appendChild(deleteBtn);

  todoList.appendChild(todo);

  todoInput.value = "";
  todoInput.focus();
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    saveTodo(inputValue);
  }
});

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");

  if (targetEl.classList.contains("finish-todo")) {
    parentEl.classList.toggle("done");


  }

  if (targetEl.classList.contains("remove-todo")) {
    parentEl.remove();

  }
})

filter.addEventListener("change", (e) => {
  selected = e.target.value;
  finishedTasks = document.querySelectorAll(".done")
  todoTasks = document.querySelectorAll(".todo")
  if(selected === "all"){
      todoTasks.forEach(function(e) {
          e.style.display = 'flex'
      })
  }
  if(selected === "done"){
      todoTasks.forEach(function(e) {
          e.style.display = 'none'
      })
      finishedTasks.forEach(function(e) {
          e.style.display = 'flex'
      })
  }
  if(selected === "todo"){
      todoTasks.forEach(function(e) {
          e.style.display = 'flex'
      })
      finishedTasks.forEach(function(e) {
          e.style.display = 'none'
      })
  }
})