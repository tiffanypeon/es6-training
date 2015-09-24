// requires promises library 

function fakeAjax(url,cb) {
  var fake_responses = {
    "file1": "The first text",
    "file2": "The middle text",
    "file3": "The last text"
  };
  var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

  console.log("Requesting: " + url);

  setTimeout(function(){
    cb(fake_responses[url]);
  },randomDelay);
}

function output(text) {
  console.log(text);
}

// **************************************

function getFile(file) {
  return new Promise(function(resolve,reject){ // we aren't using the reject in this example
    fakeAjax(file,resolve); // returns result of fake ajax
  });
}

var p1 = getFile("file1"); // call each promise
var p2 = getFile("file2"); // just like a thunk, a promise is a pattern we can wrap around a value 
var p3 = getFile("file3"); // both wrappers that make values time-independent

var complete = function(){
  console.log("Done!");
};

var error = function(){
  console.log("Something is wrong!");
};

p1
.then(output) // call the output that uses response of the promise
.then(function(){ // call next step in chain
  return p2;
})
.then(output)
.then(function(){
  return p3;
})
.then(output)
.then(
  complete,
  error
)
