// JavaScript uses functions as classes to create objects using the *new* keyword.

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const myPerson = new Person("Ziggy", "Zoggy");

console.log(myPerson.fullName())

console.log(`created with ${myPerson.firstName} && ${myPerson.lastName}`);


// Create a Person class which accepts the name and age of a person.
// The Person class should have a *describe* method which returns a string =>
// `${name}, ${age} years old`.

class PersonTwo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        return `${this.name}, ${this.age} years old`
    }
}

 const myOtherPerson = new PersonTwo("Billy the Kid", 55);

 console.log(`${myOtherPerson.describe()}`)
