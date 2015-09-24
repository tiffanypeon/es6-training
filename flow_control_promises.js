// Promises, pt.2 -

// single promise is not sufficient - need a promise for each one of those steps
// how do we get our promises to chain together? 

// implementation of a promise chain - 
doFirstThing()
.then(function(){
  return doSecondThing();
})
.then(function(){
  return doThirdThing();
})
.then(
  complete,
  error
);

function delay(num) {
  return new Promise(function(resolve,reject){
    setTimeout(resolve,num);
  });
}

delay(100)
.then(function(){
  .return delay(50);
})
.then // ...

// chaining is the flow control 
