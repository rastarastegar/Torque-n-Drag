const promise = new Promise((resolved, reject)  => {
    setTimeout(() => {
        resolved({
            name: "Ferenc",
            age: 30
        });
        // reject('Something went wrong');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolved, reject)  => {
        setTimeout(() => {
            resolved('this is my other promise');
            // reject('Something went wrong');
        }, 1500);
    });
}).then((str) => {
    console.log("does this run ", str);
}).catch((error) => {
    console.log('error', error);
});



console.log('after');

