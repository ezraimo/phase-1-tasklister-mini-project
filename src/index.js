document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const taskInput = document.querySelector('#new-task-description');
      const taskText = taskInput.value.trim();

      if (taskText !== '') {
          const taskItem = document.createElement('li');
          taskItem.textContent = taskText;
          taskList.appendChild(taskItem);

          taskInput.value = ''; // Clear input field
      }
  });
});
