//ui variable
const form = document.querySelector('#form');
const inputTask = document.querySelector('#tastInput');
const items = document.querySelector('#items');



form.addEventListener('submit', createTaskList);


function createTaskList(e){
const newTask = inputTask.value;
if(e.type === 'submit'){
  if(inputTask.value === ''){
    alert('Task field is empity');
    return;
  }

  items.document.createElement('li');

}
console.log(e, console.log(inputTask.value));

}