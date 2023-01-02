//if else
const id = 100;

if(typeof id != undefined){
    console.log(id);
}else{
    console.log('Incorrect');
}

//logical operators

//And &&
const firstName = 'Steve';
const age = 70;

if(age > 0 && age < 15){
console.log(`${firstName} is a child`);
}else if(age >= 13 && age <= 19){
    console.log(`${firstName} is a teenager`);
}else{
    console.log(`${firstName} is an adult`);
}

//Or ||
if(age < 16 || age > 65){
    console.log(`${firstName} can not run in the race` + ` because his age is ${age}`);
}else{
    console.log(`${firstName} can register for the race`+ ` because his age is ${age}`);
}

//Ternary operator
console.log(id === 100 ? 'Correct' : 'Incorrect');

//without curly braces
if(id === 100)
    console.log('Correct');
else
    console.log('Incorrect');