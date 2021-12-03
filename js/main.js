const PRIORITY_BLOCKS = document.querySelectorAll(".todo__priority-block");
const ADD_INPUTS = document.querySelectorAll(".input-add");
const ADD_BTNS = document.querySelectorAll(".btn-add");

let tasks = document.querySelectorAll(".todo__task");
let deleteBtns = document.querySelectorAll(".btn-delete");
let checkboxDone = document.querySelectorAll(".input-done"); 


for (let i = 0; i < ADD_BTNS.length; i++) {
	ADD_BTNS[i].addEventListener ('click', function () {
  	const DIV = document.createElement('div');
    DIV.className = 'todo__task';
    DIV.innerHTML = `<label> 
        <input class="input-done" type="checkbox"> 
        <span class="cursor"></span>
      </label>
      <span class="task-text" > ${ADD_INPUTS[i].value} </span>
      <button class="btn-delete"> <img src="./img/delete-task-icon.svg" alt="-"> </button>`	
    PRIORITY_BLOCKS[i].append(DIV);
    
    ADD_INPUTS[i].value = '';
    
    tasks = document.querySelectorAll(".todo__task");
    deleteBtns = document.querySelectorAll(".btn-delete");
    checkboxDone = document.querySelectorAll(".input-done"); 
    
    for (let checkbox of checkboxDone) {
      checkbox.addEventListener('click', changeColor)
    }

    for (let deleteBtn of deleteBtns) {
      deleteBtn.addEventListener('click', deleteTask)
    }
    
  })
}

for (let checkbox of checkboxDone) {
  checkbox.addEventListener('click', changeColor)
}
function changeColor () {
  let task = this.parentElement.parentElement;
  let classExist = task.classList.contains('done');

  if ( classExist ) { 
    task.classList.remove('done') 
  } else {  
    task.classList.add('done') 
  } 
}

for (let deleteBtn of deleteBtns) {
  deleteBtn.addEventListener('click', deleteTask)
}
function deleteTask () {
  let task = this.parentElement;
  task.remove()
}







