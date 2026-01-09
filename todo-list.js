const todoList = [
  {
    name: 'birthday',
    dueDate: '02-14-2026'},
  {
    name: 'wash dishes',
    dueDate: '01-10-2026'}
  ];
renderTodoList();

function renderTodoList(){
let todoListHTML = '';

for(let i=0; i<todoList.length; i++){
  const todoObject = todoList[i];
  const {name,dueDate} = todoObject //const name = todoObject.name;
 // const dueDate = todoObject.dueDate;

  const html = `<p>${name} ${dueDate} <button onclick="todoList.splice(${i}, 1); renderTodoList();">Delete</button></p>`;
  todoListHTML += html;
}
//console.log(todoListHTML);

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
  
 // console.log(todoList);

  inputElement.value = '';
  renderTodoList()
}