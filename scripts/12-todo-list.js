
function handleKeyDown(event){
/*   if(event.key === 'Enter') {
    addTodo();
  } */
}

const todoList = [
  {
  name: 'make dinner',
  dueDate: '2022-12-22'
  },
  {
  name: 'wash dishes',
  dueDate: '2022-12-22'
  }
];

function renderTodoList()
{
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index)
  {
    const name = todoObject.name; //const { name, dueDate } = todoObject;
    const dueDate = todoObject.dueDate;
    const html = `    
    <div>
      ${name}
    </div>
      <div>
      ${dueDate}
      </div>
        <button onClick="
          todoList.splice(${index}, 1);
          renderTodoList();
        " class="delete-todo-button">Delete</button>  
      `;
    todoListHTML += html;
  });
  //GENERATING HTML  `<p>${todo}</p>`
/*   for(let i = 0; i < todoList.length; i++)
  {
    const todoObject = todoList[i];
    const name = todoObject.name; //const { name, dueDate } = todoObject;
    const dueDate = todoObject.dueDate;
    const html = `    
    <div>
      ${name}
    </div>
      <div>
      ${dueDate}
      </div>
        <button onClick="
          todoList.splice(${i}, 1);
          renderTodoList();
        " class="delete-todo-button">Delete</button>  
      `;
    todoListHTML += html;
  } */
  console.log(todoListHTML);
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

renderTodoList();

function addTodo(){
  const inputElement =  document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    dueDate: dueDate //SHORT HAND PROPERTY SYNTACS name, dueDate
  });
  console.log(todoList);

  inputElement.value = '';
  renderTodoList();
}