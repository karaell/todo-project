import {PRIORITY_BLOCKS} from './view.js';
import {ADD} from './view.js';

for (let i = 0; i < ADD.BTNS.length; i++) {
	ADD.BTNS[i].addEventListener ('click', function () {
  	let AddContent = ADD.INPUTS[i].value;

    if (!AddContent) {
      alert( "Ой, а почему тут пусто?");
      return;
    }
    
    const DIV = document.createElement('div');
    DIV.className = 'todo__task';
    DIV.innerHTML = `<label> 
        <input class="input-done" type="checkbox"> 
        <span class="cursor"></span>
      </label>
      <span class="task-text" > ${AddContent} </span>
      <button class="btn-delete"> <img src="./img/delete-task-icon.svg" alt="-"> </button>`	
    PRIORITY_BLOCKS[i].append(DIV);

    ADD.INPUTS[i].value = '';
    
    DIV.querySelector('.input-done').addEventListener('click', changeColor);
    DIV.querySelector('.btn-delete').addEventListener('click', deleteTask); 
  })
}


function changeColor () {
  let task = this.parentElement.parentElement;
  task.classList.toggle('done');
}

function deleteTask () {
  let task = this.parentElement;
  task.remove()
}







