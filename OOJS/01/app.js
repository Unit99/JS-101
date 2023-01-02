//object constructor
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    this.calcAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    //console.log(this.birthday.getTime());
}

const Sanjib = new Person('Sanjib', 'Adhya', '03-28-1983');

console.log(Sanjib.calcAge());