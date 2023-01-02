const personPrototypes = {
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },

    getMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

const Marry = Object.create(personPrototypes);

Marry.firstName = 'Mary';
Marry.lastName = 'Williams';

Marry.getMarried('Thompson');

console.log(Marry);
console.log(Marry.greeting());

const Brad = Object.create(personPrototypes, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Travesy'},
    age: {value: 36}
});

console.log(Brad);