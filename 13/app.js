//Object literals
const person = {
    firstName: 'Sanjib',
    lastName: 'Adhya',
    age: 39,
    email: 'sanjib@aol.com',
    hobbies: ['movies', 'music'],
    address: {
        city: 'Kolkata',
        state: 'WB'
    },
    getBirthYear: function(){
        return 2022 - this.age
    }
}

let val = person;

val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address.city;
val = person.getBirthYear();

console.clear();
console.log(val);

//Arrays with objects
const people = [
    {name: 'John', age: 30},
    {name: 'Sanjib', age: 39},
    {name: 'Nancy', age: 33}
];

for(let i = 0; i<people.length; i++){
    console.log(people[i].name);

    document.body.innerHTML += people[i].name + '<br>';
};

