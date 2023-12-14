// async and await are meant to make async programming easy by introducing
// "coroutines". A coroutine is a function which can pause it's execution
// and return control to the main loop until some event occurs.

// It is an alternative approach to using callbacks, which makes it
// easier to write, understand, and maintain! :)

// *await*
// await is a special command, which stops the execution of the
// current function until a Promise resolves, and then return
// the promises value. It can be seen as an endless loop which
// checks if the promise has been resolved, and returns the value
// of the resolved promise when it does.

// await only works inside of async functions (which are coroutines),
// It's kind of tricky because they return a promise, instead of a value.
// Therefore, every time an async function is run, it needs an await
// in order to get the return value.

// Going to also try adding *sleep()* here instead of *setTimeout()*.
// sleep() still uses setTimeout() to work.

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sumAsync(x, y) {
    await sleep(500);
    return x + y;
}

sumAsync(4, 6).then((result) => {
    console.log(`the result is seemingly ${result} :)`);
});


// Write an async function which waits 500 milliseconds and then returns the uppercase of a
// given string. Use the sleep function provided.

async function newTest(string) {
    await sleep(500);

    return string.toUpperCase();
}

newTest("bing bong").then((result) => {
    console.log(`new bing bongs =>  ${result}`);
})