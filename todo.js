const input = document.getElementById('input');
const button1 = document.getElementById('btn1');
const divAppent = document.getElementById('div-appent');

const getTodoListFromLoc = () => {
    return JSON.parse(localStorage.getItem('TodoList'));
}

let localTodoList = getTodoListFromLoc() || [];

const addTodoDynamicElement = (element) => {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.className = 'flex items-center justify-between text-white mb-2';

    const span = document.createElement('span');
    span.textContent = element;

    const button = document.createElement('button');
    button.className = 'bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg';
    button.textContent = 'Delete';

    button.addEventListener('click', () => {
        localTodoList = localTodoList.filter(todo => todo !== element);
        localStorage.setItem('TodoList', JSON.stringify(localTodoList));
        divAppent.removeChild(ul);
    });

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    divAppent.append(ul);
}

const addTodoList = () => {
    const todoListValue = input.value.trim();
    input.value = '';
    if (todoListValue && !localTodoList.includes(todoListValue)) {
        localTodoList.push(todoListValue);
        localStorage.setItem('TodoList', JSON.stringify(localTodoList));
        addTodoDynamicElement(todoListValue);
    }
}

const showTodoList = () => {
    localTodoList.forEach((element) => {
        addTodoDynamicElement(element);
    });
}

showTodoList();
button1.addEventListener('click', addTodoList);
