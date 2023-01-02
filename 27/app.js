const btn = document.querySelector('.clear-tasks');

btn.addEventListener('click', onClick);

function onClick(e){
    e.preventDefault();

    let val;

    //val = e.type;

    //respective to the parent element
    val = e.offsetX;
    //val = e.offsetY;

    //respective to the browser/client window
    val = e.clientX;
    val = e.clientY;

    console.log('Hello World');
    console.log(val);
    
}