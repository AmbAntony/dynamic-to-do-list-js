document.addEventListener("DOMContentLoaded", function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

 function addTask(){
    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;


    const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';  

        // Add event listener to remove the task when the 'Remove' button is clicked
        removeButton.onclick = function() {
            taskList.removeChild(taskItem);
        };

        // Append the remove button to the task item, then append the item to the list
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Add event listener to the 'Add Task' button to add a task when clicked
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field to allow adding a task by pressing 'Enter'
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    })

})