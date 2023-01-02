'use strict';

let val;

const list = document.querySelector('ul');
const listItem = document.querySelector('li:first-child');

val = list;

//childNodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

//1 - Element
//2 - Attribute (deprecated)
//3 - Text Node
//8 - Comment
//9 - Document itself
//10 - doctype

//Get children element nodes
val = list.children;
val = list.children[1];
list.children[1].id = 'demo';
list.children[0].textContent = 'Hello';

//children of children
val = list.children[1].children[0];
//list.children[1].children[0].id = 'test';

//first child
val = list.firstChild;
val = list.firstElementChild;

//last child
val = list.lastChild;
val = list.lastElementChild;

//Count child elements
val = list.childElementCount;

//parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//next/previous sibling
val = listItem.nextSibling;
//val = listItem.previousSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;


console.log(list.children[1].children[0].classList.contains('link'));

console.log(val);

console.log(document.scripts[0].getAttribute('src'));


