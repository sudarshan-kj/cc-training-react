
1: Example: 


let promise = new Promise(function(resolve, reject) {
  // executor ( the producing code)
  // this function is run automatically
});


==========================================================================================================================


What happens here?

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("I have resolved!"), 5000);
});


1: What happens immediately?
2: What happens after 5 seconds?



==========================================================================================================================



Consuming the result of the promise using then(), catch() and finally()

1: 

then()

promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);


Example: 


let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
  result => alert(result), // shows "done!" after 1 second
  error => alert(error) // doesn't run
);



let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.then(
  result => alert(result), // doesn't run
  error => alert(error) // shows "Error: Whoops!" after 1 second
);



catch()



let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject("Something went wrong"), 3000);
});

promise.catch(alert); // shows "Something went wrong" after 3 seconds

// Also,this is the same as promise.then(null, f)



==========================================================================================================================


Promise Chaining

new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});



==========================================================================================================================


Microtasks:


let promise = Promise.resolve();

promise.then(() => alert("promise done!"));

alert("code finished"); // this alert shows first

















