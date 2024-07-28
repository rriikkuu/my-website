function addTodo() {
    const todoList = document.getElementById('todo-list');
    const newTodo = document.getElementById('new-todo').value;
    const listItem = document.createElement('li');
    listItem.textContent = newTodo;
    todoList.appendChild(listItem);
    document.getElementById('new-todo').value = '';
}

function saveDiary() {
    const diaryContent = document.getElementById('diary').value;
    localStorage.setItem('diary', diaryContent);
}

window.onload = function() {
    const savedDiary = localStorage.getItem('diary');
    if (savedDiary) {
        document.getElementById('diary').value = savedDiary;
    }
}function addTodo() {
    const todoList = document.getElementById('todo-list');
    const newTodo = document.getElementById('new-todo').value;
    const listItem = document.createElement('li');
    listItem.textContent = newTodo;
    todoList.appendChild(listItem);
    document.getElementById('new-todo').value = '';
}

function saveDiary() {
    const diaryContent = document.getElementById('diary').value;
    localStorage.setItem('diary', diaryContent);
}

window.onload = function() {
    const savedDiary = localStorage.getItem('diary');
    if (savedDiary) {
        document.getElementById('diary').value = savedDiary;
    }
}