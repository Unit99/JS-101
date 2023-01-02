//log to console
console.log('Hello World');
console.log(123);
console.log(true);

//var greeting = 'Hello';

console.log(greeting);

console.log(1,2,3,4);

console.log({a:1, b:2});
console.table({a:1, b:2});

console.error('This is some error');
console.clear();

console.warn('This is a warning');

console.time('Hello');

    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    console.log('Hello World');
    
console.timeEnd('Hello');


/*
Multi
line
comments
*/
//var, let, const

// var name = 'John Doe';

// console.log(name);

// name = 'Steve Smith';
// console.log(name);

//init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

//letters, numbers, _ , $
//can not start with numbers
var _name = 'John';

//Multi word vars
var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Under score
var FirstName = 'Tom'; // Pascal Case
var firstname //not recommended

// let name;
// name = 'John Doe';

// console.log(name);

// name = 'Steve Smith';
// console.log(name);


//Const
// const name = 'John';
// console.log(name);

//Can not re-assign
//name = 'Sara';

//have to assign a value
//const greeting;


const person = {
    name: 'John',
    age: 30
}

person.name = 'Sara';
person.age = 32;

console.log(person);

//array
const numbers = [1,2,3,4,5];

numbers.push(6);

console.log(numbers);

//Primitive data types

//string
const name = 'John Doe';
console.log(typeof name);

//numbers
const age = 45;
console.log(typeof age);

//booleans
const hasKids = true;
console.log(typeof hasKids);

//Null
const car = null;
console.log(typeof car);

//undefined
let test;
console.log(typeof test);


//Symbols
const sym = Symbol();
console.log(typeof sym);

//Reference types of data
//Array
const hobbies = ['movies', 'music'];
console.log(typeof hobbies);


//object literals
const address = {
    city: 'Kolkata',
    state: 'WB'
}

const today  = new Date();
console.log(today);
console.log(typeof today);
