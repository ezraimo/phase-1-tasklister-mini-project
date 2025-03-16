document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');
  const clearButton = document.querySelector('#clear-tasks'); // Get the clear button

  // Add Task
  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const taskInput = document.querySelector('#new-task-description');
      const taskText = taskInput.value.trim();

      if (taskText !== '') {
          const taskItem = document.createElement('li');
          taskItem.textContent = taskText;

          // Add a delete button for individual tasks
          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = '❌';
          deleteBtn.addEventListener('click', () => taskItem.remove());

          taskItem.appendChild(deleteBtn);
          taskList.appendChild(taskItem);

          taskInput.value = ''; // Clear input field
      }
  });

  // Clear all tasks
  clearButton.addEventListener('click', () => {
      taskList.innerHTML = ''; // Remove all tasks
  });
});
