//general loops
//for loop
// for(let i = 0; i < 10; i++){
//    console.log('Number ' + i);

//    if(i === 2){
//     console.log('2 is my favourite number');
//     continue;
//    }

//    if(i === 5){
//     console.log('Stop the loop');
//     break;
//    }
// }

//while loop
// let i  = 0;

// while(i < 10){
//     console.log('Number ' + i);
//     i++;
// }


//do while loop
// let i = 100;

// do{
//     console.log('Number ' + i);
//     i++;
// }

// while(i < 10);

//loop through arrays
const cars = ['Toyota', 'Honda', 'Chevy', 'Ford'];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// } 

//for each
// cars.forEach(function(car, index, array){
//     console.log(`${index}: ${car}`);
//     console.log(array);
// });


//map
// const users = [
//     {id: 1, name: 'John'},
//     {id: 2, name: 'Sara'},
//     {id: 3, name: 'Steve'},
//     {id: 4, name: 'Karen'}
// ];

// const ids = users.map(function(user){
//     return user.name;
// });

// console.log(ids);

//for in loop
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let x in user){
    console.log(`${x}: ${user[x]}`);
}


