//storing tasks from form input

const form = document.querySelector('form');

const input = document.querySelector('input');

const submit = document.querySelector('button');

form.addEventListener('submit', addTask);

function addTask(e){
    const task = input.value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));    

    alert('Task saved');

    e.preventDefault();
    
    console.log(`Event type: ${e.type}`);
}

const tasks = JSON.parse(localStorage.getItem('tasks'));

console.log(tasks);