// only expressed traditionally as a synchronous method 

// a thunk is a function that already has all of the data that it needs to do its job 

function add(x,y) {
  return x + y;
} // not a thunk 

var thunk = function() {
  return add(10,15);
}; // is a thunk

thunk(); // 25 

// thunk itself as a function has now become a meaningful value to our program 
// we can pass it around and at any point extract the value from it 
// there is value benefit to having this container wrapper we can pass around 

// asynchronus thunk is one that takes only one parameter, needs callback to return its value 

function addAsync(x,y,cb) {
  setTimeout(function(){
    cb(x+y);
  }, 1000);
}

var thunk = function(cd) { 
  addAsync(10,15,cb);
};

thunk(function(sum){
  sum; //25
});

// you might have it be lazy and not have it calculate the value until you call it (maybe it's expensive)
// once you do the work the first time, you could cache that information so you can refer back the next time
// memoization
// normalizes our code: if some things are sync and some are async, program is very complex
// if everything takes a callback, there is less context-switching in our minds when reading the code 

//  
// 
