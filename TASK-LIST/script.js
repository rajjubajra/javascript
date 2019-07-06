//define UI variables
const form = document.querySelector('#form');
const taskList = document.querySelector('#task-list');
const inputTask = document.querySelector('#input-task');
const clearButton = document.querySelector('#clear-button');
const filter = document.querySelector('#filter');
const message = document.querySelector('#message');



//run all event handers
loadEventHanders();

//load all event handlers
function loadEventHanders(){
  form.addEventListener('submit', addTaskItem);
  //delete selected task from the list
  document.body.addEventListener('click', deleteItem);
  //delele all 
  clearButton.addEventListener('click', clearAll);
  //filter 
  filter.addEventListener('keyup', filterItems)
  //clear empty field messaage 
  inputTask.addEventListener('keyup', clearMessage);
}

//add task function
function addTaskItem(e){
  e.preventDefault();
  if(inputTask.value === ''){
    message.innerHTML = '<i>Input field is empty</i>';
    return;
  }
  //clear empty field message
  message.innerHTML = '';
  //create li elment
  const li = document.createElement('li');
  li.className = 'list-item';// add class to li element
  li.appendChild(document.createTextNode(inputTask.value)); //append input text 
  const del = document.createElement('a'); //create delete link
  del.innerHTML = 'x'; //add delete icon
  del.className = 'delete-item'; //add class name to delete link
  li.appendChild(del);  //append deletet link in to 'li' element
  taskList.appendChild(li); //append added task into taskList un-order list

  //clear input field
  inputTask.value = '';  
}
//delete item
function deleteItem(e){
  console.log(e.target)
  if(e.target.className === 'delete-item')
   e.target.parentElement.remove();
}
//clear all listed tasks
function clearAll(){
    //faster way to delete all
    while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild);
    }
}
//filter the task
function filterItems(e){
     
    //search field variable 
    const text = e.target.value.toLowerCase();
    //task list items
    const taskArr = document.querySelectorAll('.list-item');
    
    //show and hide if input letter matches to each line of task
    taskArr.forEach
    ( function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
          task.style.display = 'block';
        }else{
          task.style.display = 'none';
        }
    })
}
//clear the empity input field message
function clearMessage(){
  console.log(event.keyCode || event.which );
  //do not clear message if keyup is Enter key
  const keyCode = event.keyCode || event.which
  if(keyCode != 13){
    message.innerHTML = '';
  }
} 




