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