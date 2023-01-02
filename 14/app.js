//Date-time
let val;

const today = new Date();
let birthday = new Date('9-10-1981 11:25:00');

//birthday = new Date('September 20 1981');

birthday = new Date(9/10/1981);

console.log(birthday);

val = today.getDate();
val = today.getMonth();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();

birthday.setDate(25);
birthday.setMonth(2);
birthday.setFullYear(2022);

console.log(val);
console.log(typeof today);
console.log(birthday);
