const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const toDoObject = todoList[i];
    // const name = toDoObject.name;
    // const dueDate = toDoObject.dueDate;
    const { name } = toDoObject;
    const { dueDate } = toDoObject;

    const html = `
              <div>${name}</div>
              <div>${dueDate}</div>
              <button onclick="
                todoList.splice(${i}, 1);
                renderTodoList();

                saveToStorage();
              "
              class="delete-todo-button"
              >Delete</button>
              `; //generating the HTML
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addToDo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push( {
    // name: name,
    // dueDate: dueDate
    name,
    dueDate
  });

  inputElement.value = "";

  renderTodoList();
  saveToStorage();  
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}