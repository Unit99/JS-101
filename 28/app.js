const form = document.querySelector('#task-form');

const inputFld = document.getElementById('task');

inputFld.value = '';

const submitBtn = document.getElementById('submit');

//console.log(inputFld);

//inputFld.addEventListener('keypress', runEvent);

const title = document.querySelector('#task-title');

document.body.addEventListener('mousemove', runEvent);

//form.addEventListener('submit', runEvent);

function runEvent(e){   
    console.log(`Event type: ${e.type}`);

    title.innerText = `Mouse X: ${e.offsetX} MouseY: ${e.offsetY} `;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;

    e.preventDefault();
}