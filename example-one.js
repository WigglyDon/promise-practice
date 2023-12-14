function getServerStatus() {
    const result = fetch('/server/status');

    // THIS WILL NOT WORK!
    console.log('The status from the server is: ', result.ok);
}

// fetch() function is async

// It will return something that is *not exactly* the result, but will
// *eventually be* the result.

// The *thing* that is returned is a promise



    // CORRECTED VERSION
function getServerStatus() {
    const result = fetch('/server/status');

    result.then(function(status) {
        console.log('The status from the server is: ', status.ok);
    });
}

// Promises are a native JS object with 2 traits.
// 1. It receives a single argument which is a function.
//      The function NEEDS to have two arguments,
//      a resolve function, and a reject function.
// The code written inside the promise needs to use one of these two.

// 2. It can be waited on using the *then* method (etc). or *await*.
// An async function is defined by a function, which instead of
// returning the value it was supposed to return, returns a *Promise* object.
// The promise object eventually resolves and gives the user the answer.

function sumAsync(x, y) {
    const p = new Promise((resolve, reject) => {
        resolve(x + y);
    });

    // this returns a PROMISE... not a value.
    return p;
}

// usage
sumAsync(24, 7).then((result) => {
    console.log(`The result of the addition is: ${result}`);
})

// so the .then() is here with a callback because sumAsync() does not
//      actually return a value itself. The promise object it returns
//      has the returned value.