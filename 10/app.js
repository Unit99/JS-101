//String methods
const firstName = 'Sanjib';
const lastName = 'Adhya';
const age = 39;
const str = 'Hello there My name is Sanjib';

let val;

val = firstName + lastName;

//Concataenation
val = firstName + ' ' + lastName;

//Append
val = 'Brad';
val += ' Travesy';

//Escaping
val = 'My name is: ' + firstName + ' ' + 'and I\'m' + ' ' + age;  

//Length
val = firstName.length;

//Concat
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();
//val = lastName.toLowerCase();

val = firstName[2];

//indexOf()
val = firstName.indexOf('1');
//val = firstName.lastIndexOf('2');

//charAt()
val = firstName.charAt('2');

//Get last char
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0, 4);

//slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);

//split
val = str.split(' ');

//replace
val = str.replace('Sanjib', 'Baishali');

//includes()
val = str.includes('Messi');


console.log(val);
console.log(typeof val);