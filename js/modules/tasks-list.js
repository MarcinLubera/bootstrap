function showTasks(){
  tasks.forEach(function(title){
    addNewTask(title);
  });
}

function deleteTask(task) {
   var liToDelete =  task.closest('li'); 
    task.closest('label').removeChild(liToDelete);
}