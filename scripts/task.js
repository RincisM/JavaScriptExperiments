let tasks = [];
let currentIndex = 0;

function addTask() {
  const newTaskInput = document.getElementById('newTaskInput');
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    tasks.push(newTask);
    newTaskInput.value = '';
    updateTaskList();
  }
}

function updateTaskList() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerText = task;
    taskList.appendChild(li);
    li.addEventListener('click', () => {
      currentIndex = tasks.indexOf(task);
    });
  });
}

function nextTask() {
  if (tasks.length > 0) {
    const taskList = document.getElementById('nextList');
    const task = tasks.splice(currentIndex, 1)[0];
    const li = document.createElement('li');
    li.innerText = task;
    taskList.appendChild(li);
    updateTaskList();
  }
}
