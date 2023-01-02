//Array methods
const numbers = [2,20, 200, 3, 30, 300];
const numbers2 = new Array(22, 45,33, 56, 67);
const fruit = ['Apple', 'Mango', 'Banana', 'Grapes'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let val;

//Get array length
val = numbers.length;

//Check if is array
val = Array.isArray(numbers);

//Get single value
val = numbers[3];

//Insert into array
mixed[2] = 100;

//Find index of value
val = numbers.indexOf(2);

//Mutating array

// //Add to the end
// numbers.push(true);

// //Add to the front
// numbers.unshift(350);

// //Take off from end
// //numbers.pop();

// //Take off from front
// //numbers.shift();

// //Splice values
// numbers.splice(1,3);

// //Reverse
// numbers.reverse();

// //Concatenate array
// val = numbers.concat(numbers2);

// //Sorting arrays
// val = fruit.sort();
//val = numbers.sort();

//use the "Compare" function
// val = numbers.sort(function(x, y){
//     return x - y;
// });


// //reverse sort
// val = numbers.sort(function(x, y){
//     return y - x;
// });

//find
function under50(num){
    return num < 50;
}

val = numbers.find(under50);

console.log(mixed);
console.log(val);
console.table(numbers);
console.log(typeof numbers);
