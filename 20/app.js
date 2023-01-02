//Global scope
var a = 1;
let b = 2;
const c = 3;

//function scope
function test() {
    var a = 4;
    let b = 5;
    const c = 6;

    console.log('Function Scope', a, b, c);
}
test();

//block scope
if (true) {
    var a = 4;
    let b = 5;
    const c = 6;

    console.log('Block Scope', a, b, c);
}

for (var a = 0; a < 10; a++) {
    console.log(a);
}

console.log('Global Scope', a, b, c);

const fruit = 'Banana';

switch (fruit) {
    case 'Banana':
        console.log('The fruit is Banana');
        break;

    case 'Orange':
        console.log('The fruit is Orange');
        break;

    default:
        console.log('The fruit is neight Banana nor Orange');
        break;
}

let cars = [{
        brand: 'ford',
        color: 'red'
    },
    {
        brand: 'chevy',
        color: 'yellow'
    },
    {
        brand: 'toyota',
        color: 'maroon'
    }
];

let person = {
    name: 'Sanjib',
    job: 'web designer',
    age: 39
}

console.log(person.name);

document.querySelector('.hello').innerHTML = cars;


//console.table(cars);