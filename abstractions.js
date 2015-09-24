// promise gate - 
// call three different functions that are three different promises, then do something w/ all results

Promise.all([
  doTask1a(),
  doTask1b(),
  doTask1c()
])
.then(function(results){
  return doTask2(
    Math.max(
      results[0],
      results[1],
      results[2]
    );
  );
});

// what if a promise never resolves or rejects - do we wait forever? 

Promise.race // takes a list of promises and rather than waiting for all of them to complete
// only cares about the first one that completes 
Promise.race([
  p, // existing promise
  new Promise(function(_,reject){
    setTimeout(function(){
      reject("Timeout!");
    },3000);
  })
])
.then(
  success,
  error
);

// blog.getify.com/promises-part-1/
