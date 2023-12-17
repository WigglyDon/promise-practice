// JavaScript uses prototype based inheritance.
// Every object has a `prototype`, and when a method of the object
// is called then JavaScript tries to find the right function to execute from the prototype object.


// Without using the `prototype` object, the object can be defined like this:

function Person(name, age) {
    this.name = name;
    this.age = age;

    function describe() {
        return `${this.name}, ${this.age} years old.`;
    }
}

// creating an instance of `Person`, a new copy of all members and methods of functions is created.
// That means that every instance of an object will have it's own `name` and `age` properties,
// as well as its own `describe` function.

// However, using the `Person.prototype` object and assign a function to it, will also work.


function PrototypePerson(name, age) {
    this.name = name;
    this.age = age;

    PrototypePerson.prototype.describe = function() {
        return `${this.name}, ${this.age} years old.`;
    }
}

// Inheritance

// What if we want to create a Person object, and a Student object derived from Person? :

const StudentPerson = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.describe = function() {
    return this.name + ", " + this.age + " years old.";
}

const Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject) {
    console.log(this.name + " just learned " + subject);
}

// create me
const me = new Student();

// initialize me
me.initialize("don", 26);

// log my info
console.log(me.describe());

// teach me something
me.learn("Singing! :)");

