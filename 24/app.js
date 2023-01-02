let title = document.getElementById('task-title');
console.log(title);

console.log(title.id);
console.log(title.className);
console.table(title.classList);

let classL = Array.from(title.classList);
console.log(classL);

//let lis = document.querySelector('.collection').getElementsByClassName('collection-item');

//console.log(lis);

document.querySelector('li:nth-child(even)').style.color = 'red';

//const item = document.querySelector('.collection').getElementsByClassName('collection-item');

//console.log(item);

let listItem = document.querySelector('ul').getElementsByClassName('collection-item');
//console.log(listItem);

listItem[2].innerText = 'Hello world';

listItem = Array.from(listItem);
console.log(listItem);

listItem.reverse();

listItem.forEach(function(item , index){
    item.innerText = `${index}: Hello`;
});