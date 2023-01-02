//prototype

//object constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
}

Person.prototype.getFullName = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

Person.prototype.calcAge = function () {
    const diff = Date.now() - this.birthday.getTime();

    const ageData = new Date(diff);

    const myAge = Math.abs(ageData.getUTCFullYear() - 1970);

    return myAge;
}

const person1 = new Person('Sanjib', 'Adhya', '03-28-1983');

const myFullName = person1.getFullName();
console.log(myFullName);

console.log(person1.calcAge());

//classes
class newPerson {
    constructor(firstName, lastName, memberShip) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.memberShip = memberShip;
    }

    getFullName(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    memberType(){
        const memberType = this.memberShip.toLowerCase();

        return `You're a ${memberType} member`;
    }
}

const customer = new newPerson('John', 'Smith', 'Premium');

const container = document.createElement('p');

const content = document.createTextNode(customer.getFullName());

container.appendChild(content);
console.log(content);

document.body.appendChild(container);

//container.innerText = customer.getFullName();



console.log(customer.memberType());