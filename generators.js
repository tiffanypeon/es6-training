function* gen() { // * indicates generator function
  console.log("hello");
  yield;
  console.log('world');
}

var it = gen();
it.next(); // "hello" -- stops at the yield. { value: 'hello', done: false }
it.next(); // 'world' { value: 'world', done: false }
it.next(); // { value: undefined , done: true }

// the notion of a function always finishing is called 'run to completion'
// generator function allows for a function to pause mid-run 
// the yield keyword allows it to
// iterator is an object that controls some other data source, that steps through each value step by step
// by calling #.next
// iterators can pull from data sources, but they can also control generators
// when we call gen, we produce an iterator 
// when we call .next, it will start the generator, it will start running, it will either pause at a yield
// or it will run to completion

// it's a localized blocking that's only stopping within the generator.
// it's simply yielding control back to the calling code 
// not blocking the whole javascript thread 
  
// always one more .next call than a yield call 
// think about the yield question as basically asking a question
// extra .next is the one that starts everything up 

function coroutine(g) {
  var it = g();
  return function(){
    return it.next.apply(it,arguments);
  }
}

// how do I put promises together w/ generators - 
// when you yield something, yield out a promise 
