// Asynchronously sums two numbers with a 500ms delay using setTimeout()

const sumAsync = (x, y) => {
    console.log(`1. execution`);

    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`4. resolving promise after delay`);
            resolve(x + y);
        }, 500);
        console.log(`2. sumAsync promise has been initialized~`)
    });
    console.log(`3. symAsync has returned the Promise`);
    return p;
}

sumAsync(5, 32).then((result) => {
    console.log(`5. prints result! => ${result}`);
});