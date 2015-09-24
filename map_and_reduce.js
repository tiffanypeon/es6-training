// What map and reduce are all about
var list = [1,2,3,4,5];

// go through entire list and make a transformation on each value in the list

list.map(function(v){
  return v * 2;
});
// [2,4,6,8,10]
// not changing it in place, creating a new list w/ one to one mapping 

// when you want to compose values in a list
[1,2,3,4,5].reduce(function(sum, value){ // most people use acc(accumulator) and value
  return sum + value;
}, 0); // takes an initial value (eg. 0 for addition, '' for concat, empty function for function comp)
// first value in the sum is 0 (initial value)
// we are responsible for composing them 
// produced a single value that was a composition of all values in the list 

