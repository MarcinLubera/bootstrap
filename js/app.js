 var tasksContainer = document.querySelector('ul');
 var newTaskForm = document.querySelector('.newTaskContainer');
document.addEventListener('DOMContentLoaded', function (){
  bindAddTaskEvents();
  showTasks();
});