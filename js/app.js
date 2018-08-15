 var tasksContainer = document.querySelector('ul');
 var newTaskForm = document.querySelector('.input-group form');
document.addEventListener('DOMContentLoaded', function (){
  bindAddTaskEvents();
  showTasks();
});