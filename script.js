// Select the input and task list elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Create the list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create the remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn');

    // Set up click to remove the task
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to li, and li to the task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input
    taskInput.value = "";
  }
}
