function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

//Greeting
Person.prototype.greetings = function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
}

//Get married
Person.prototype.getMarried = function(newLastName){
    this.lastName = newLastName;
}

const Person1 = new Person('John', 'Smith');

//console.log(Person1.greetings());



//Customer constructer
function Customer(firstName, lastName, phone, membership){
    Person.call(this, firstName, lastName);
    //this.firstName = firstName;
    //this.lastName = lastName;
    this.phone = phone;
    this.membership = membership;
}

Customer.prototype = Object.create(Person.prototype);

//create Customer
const Customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

//console.log(Customer1);





console.log(Customer1.greetings());

const Marry = new Person('Marry', 'Donald');

Marry.getMarried('Doe');

console.log(Marry.greetings());
