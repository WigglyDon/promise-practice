// JavaScript functions run in a specific context, and use *this* to access it.

// All standard functions in browser run under *Window* context.
// Functions defined under an object or a class (another function) will use
// the context of the object it was created in.
// The context of  function can be changed at runtime, before or during the execution of it.

// This part is weird, oh well?
// Binding a function to an object to make it an object method using bind()

const person1 = {
    name: "Smingy"
}

const person2 = {
    name: "lasagna man!"
}

function printName() {
    console.log(`${this.name}`);
}

const boundPrintName = printName.bind(person1);


console.log(`first print:`);
boundPrintName();

// note, this doesn't work with anonymous arrow functions.

// Calling a function with a different context
// *call* and *apply* functions call a function as if it was bound to an object.
// The difference between them is how they receive their arguments.
// *call* receives `this` argument first, and after the function args.
// *apply* receives `this` argument first, and then an array of args to pass to a provided function.

// example =>

console.log(`second print:`);
printName.call(person1);

// call/apply vs bind
// the difference between call/apply and bind is that bind returns a new function
// which is identical to the old function, except that `this` in the new function is now the object
// that it was bound to. call/apply calls the function with `this` being the bound object,
// but it does not return a new function or change the original, it calls it with a different
// value for `this`.

// example =>

//boundPrintNameTwo gets printName's return value (null)
// const boundPrintNameTwo = printName.call(person2);

// boundPrintNameTwo();

// printName.bind(person2);
// printName();

// So it's helpful to think of `call` as executing the return value of `bind`.

// example =>
console.log(`should print lasagna man =>`);
printName.call(person2);

console.log(`should also print lasagna man =>`);
printName.bind(person2)();