//create element
const li = document.createElement('li');

//adding class to li
li.className = 'collection-item';

//setting attribute to li
li.setAttribute('title', 'New Item');

//create text node and append
li.appendChild(document.createTextNode('Hello World'));

//create new link element
const link = document.createElement('a');

link.className = 'delete-item secondary-content';

//adding css attribute to the anchor element
link.style.cursor = 'pointer';

//add icon
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);

//append li as a child to the ul
const ul = document.querySelector('.collection');

ul.appendChild(li);

//console.log(li);


//replace element
const newHeading = document.createElement('h5');

newHeading.id = 'task-title';
newHeading.className = 'task text';

newHeading.appendChild(document.createTextNode('Task list'));

const oldHeading = document.getElementById('task-title');

const card = document.querySelector('.card-action');

card.replaceChild(newHeading, oldHeading);

const firstLi = document.querySelector('.collection').children[0];

firstLi.nextElementSibling.remove();

document.querySelector('.collection').lastElementChild.remove();

const firstA = firstLi.children[0];

console.log(firstA);

let delItem = firstLi.removeChild(firstA);

console.log(delItem);

console.log(firstLi);

console.log(newHeading);