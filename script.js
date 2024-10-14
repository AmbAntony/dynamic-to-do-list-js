
document.addEventListener('DOMContentLoaded', function() {
 
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

   
    let tasks = [];

    
    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks); 
            tasks.forEach(task => displayTask(task)); 
        }
    }

    // Function to save tasks to Local Storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks array to Local Storage
    }

    // Function to display a task in the DOM
    function displayTask(taskText) {
        // Create a new <li> element for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Add a class to the task item for styling purposes
        taskItem.classList.add('task-item');

        // Create a 'Remove' button for each task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add event listener to remove the task when the 'Remove' button is clicked
        removeButton.onclick = function() {
            taskList.removeChild(taskItem);
            removeTask(taskText); // Remove from tasks array and update Local Storage
        };

        // Append the remove button to the task item, then append the item to the list
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get the value from the input field

        if (taskText === "") {
            alert("Please enter a task!");
            return; // Exit the function if the input is empty
        }

        tasks.push(taskText); // Add the new task to the tasks array
        saveTasks(); // Save the updated tasks array to Local Storage

        displayTask(taskText); // Display the new task in the DOM
        taskInput.value = ''; // Clear the input field
    }

    // Function to remove a task from the tasks array and update Local Storage
    function removeTask(taskText) {
        tasks = tasks.filter(task => task !== taskText); // Remove the task from the array
        saveTasks(); // Save the updated tasks array to Local Storage
    }

    // Add event listener to the 'Add Task' button to add a task when clicked
    addButton.addEventListener('click', addTask);

    // Add event listener to the input field to allow adding a task by pressing 'Enter'
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});
