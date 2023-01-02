function person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);    
}

person.prototype.calcAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

person.prototype.fullName = function(){
    return (`${this.firstName} ${this.lastName}`);
}

const John = new person('John', 'Doe', '04-10-1988');

console.log(John.fullName());
console.log(John.hasOwnProperty('fullName'));

