const num1 = 100;
const num2 = 60;

let val;

//Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

//Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.4);
val = Math.floor(2.4);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,4,5,55,6,1, -2);
val = Math.max(2,33,4,5,55,6,1, -2);
val = Math.random();

val = Math.ceil(Math.random() * 20 + 1);

console.log(val);

let val4;

val4 = String([1,2,3,4]);
val4 = String({a: 1, b:2});

console.log(val4);