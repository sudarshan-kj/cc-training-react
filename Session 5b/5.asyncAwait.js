==========================================================================================================================


Async

1: 

async function f() {
  return 1;
}


2: 

async function f() {
  return 1;
}

f().then(alert); // 1


is same as 


async function f() {
  return Promise.resolve(1);
}

f().then(alert); // 1




Await

// works only inside async functions
let value = await promise;


async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();


What would happen here?

function f() { 
 let promise = Promise.resolve(1); 
 let result = await promise; 
}

