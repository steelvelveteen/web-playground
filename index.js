<<<<<<< HEAD
// Create a promise that will handle when things go Ok and when things don't go Ok
// Unfamiliar with these topics as I am used to Observables in RxJS for angular

const promise = new Promise((resolve, reject) => {
  let a = 4 + 2;
  if (a != 6) {
    resolve('Passed');
  } else {
    reject("Something went wrong. Promises sent back a rejected state.");
  }
});

// Here we output how that promise was handled

promise
.then(message => {
  console.log("Promises was handled successfully");
  console.log("Message: " + message);
})
.catch(message => {
    console.log("Promises was not handled");
    console.log("Failed:" + message);
});


// More on promises. Let's create here three new promises
const recordVideoOne = new Promise((resolve, reject) => {
    setTimeout(_ => {
        resolve('Video 1 recorded');
    }, 4000);
});

const recordVideoTwo = new Promise((resolve, reject) => {
    setTimeout(_ => {
        resolve('Video 2 recorded');
    }, 6000);
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 recorded');
});


// We now want to run all these promises in parallel
// In Observables this would be a forkJoin. Beautiful!
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(messages => { // wil receive all messages in an array
    console.log("All passed: " + messages);
});

// Or if we want to do something as soon as one of these
// promises has completed

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
])
.then(message => { // will the first message completed
    console.log('First completed: ' + message);
});









=======
document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello Webpack Playground');

});

>>>>>>> master
