function addNewTask(title){
  var taskLi = document.createElement('ul');

    taskLi.classList.add('.single-task');
    taskLi.innerHTML = prepereTaskHTML(title);


    tasksContainer.appendChild(taskLi);

    function prepereTaskHTML(title) {
      return  '<label class="col-12">'+'<li class="single-task">' + ' <input type="checkbox">' +
      '<span>' +
        '<i class="fa fa-check"></i>' +
      '</span>'+ title +'<span class="remove">' +
        '<i class="fa fa-close"></i>' +
      '</span>' + '</li>' + '</label>';
}} 

function bindAddTaskEvents() {
      newTaskForm.addEventListener('submit', function(event) {
      event.preventDefault();

       var title = this.querySelector('input').value; 
        
        if (title) {
          addNewTask(title);
        }

      
});
}