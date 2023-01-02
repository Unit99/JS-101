//ES6 classes
class Person{
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calcAge(){
        const diff = Date.now() - this.birthday.getTime();

        const ageDate = new Date(diff);

        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    fullName(){
        return `My full name is: ${this.firstName} ${this.lastName}`;
    }


    getMarried(newLastName){
        this.lastName = newLastName;    
    }

    //static function
    static addNumber(x,y){
        return x + y;
    }
}

const Mary = new Person('Mary', 'Williams', '03-28-1983');

console.log(Mary.greeting());
console.log(Mary.fullName());

Mary.getMarried('Thompson');
console.log(Mary.fullName());

console.log(Mary.calcAge());

let num = Person.addNumber(1,2);
console.log(num);

console.log(Mary.firstName);