// rejecting promises

function sumAsync(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (x < 0 || y < 0) {
                reject("Negative Values Received");
            } else {
                resolve(x + y);
            }
        }, 2500)
    });
}


// a negative value passed here will result in the error catch block
sumAsync(-5, 7).then((result) => {
    console.log(`result is ${result}`);
}).catch((error) => {
    console.log(`error! => ${error}`);
})