// Create an object called `Teacher` derived from the Person class,
// Implement a method called `teach` which receives a string called `subject` and prints
// [teacher's name] is now teaching [subject]

var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

// TODO: create the class Teacher and a method teach

const Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
}

var him = new Teacher();

him.initialize("Adam", 45);
him.teach("Inheritance");