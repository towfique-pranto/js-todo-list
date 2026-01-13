const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
renderTodoList();

function renderTodoList(){
let todoListHTML = '';

todoList.forEach((todoObject, index)=>{
  const {name,dueDate} = todoObject 
  const html = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button onclick="todoList.splice(${index}, 1); renderTodoList();"
    class="delete-button">Delete</button>`;
  todoListHTML += html;
});
document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const inputDateElement = document.querySelector('.js-duedate-input');

  const name = inputElement.value;
  const dueDate = inputDateElement.value;

  todoList.push({
    name,   //name: name,
    dueDate   //dueDate: dueDate
  });
  let todoListStr = JSON.stringify(todoList)
  localStorage.setItem("todoList", todoListStr);
  
 // console.log(todoList);

  inputElement.value = '';
  renderTodoList()
}