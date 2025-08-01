document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // ✅ Load tasks from localStorage on page load
    loadTasks();

    // ✅ Add event listeners
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText); // Save to localStorage by default
            taskInput.value = '';
        } else {
            alert('Please enter a task!');
        }
    });

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText !== '') {
                addTask(taskText); // Save to localStorage by default
                taskInput.value = '';
            } else {
                alert('Please enter a task!');
            }
        }
    });

    // ✅ Function to add task to DOM and optionally to localStorage
    function addTask(taskText, save = true) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        // ✅ Remove task from DOM and localStorage
        removeButton.onclick = function () {
            taskList.removeChild(taskItem);
            removeTaskFromLocalStorage(taskText);
        };

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // ✅ Function to load tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // Do NOT save again
        });
    }

    // ✅ Function to remove task from localStorage
    function removeTaskFromLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
});
