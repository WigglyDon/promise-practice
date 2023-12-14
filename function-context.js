// JavaScript functions run in a specific context, and use *this* to access it.

// All standard functions in browser run under *Window* context.
// Functions defined under an object or a class (another function) will use
// the context of the object it was created in.
// The context of  function can be changed at runtime, before or during the execution of it.

// This part is weird, oh well?
// Binding a function to an object to make it an object method using bind()

const person1 = {
    name: "John"
}

function printName() {
    console.log(`${this.name}`);
}

const boundPrintName = printName.bind(person1);

boundPrintName();

// note, this doesn't work with anonymous arrow functions.