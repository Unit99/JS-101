//function declarations
function greet(firstName = 'John', lastName = 'Doe') {
    return 'My name is ' + firstName + ' ' + lastName;
}

console.log(greet('Steve', 'Travesy'));

//function expressions
const num = function (x = 3) {
    return x * x;
}

console.log(num(2));

//Immediately invokable function expressions i.e. IIFE's
(function (name = 'John') {
    console.log('Hello ' + name);
})('Brad');

//property methods
const todo = {
    add: function(){
        console.log('Ádd todo...');
    },
    edit: function(id){
        console.log('Edit todo ${id}');
    }
}

console.log(todo.add);
todo.add();
todo.edit(22);