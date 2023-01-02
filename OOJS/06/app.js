//ES6 Subclasses
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    static addNum(x, y){
        return x + y;
    }
}

class Customer extends Person{   

    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static memberShipCost(){
        return 500;
    }
}

const customer1 = new Customer('Brad', 'Pitt', '555-555-5555', 'Standard');

console.log(customer1.greeting());

console.log(Customer.memberShipCost());
console.log(Customer.addNum(2,2));