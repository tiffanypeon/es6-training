// The first way that we coordinate is with a callback 

setTimeout(function(){
  console.log('callback!');
}, 1000);

// The good thing is that for us to execute this task, we wait 1000 seconds before checking
// We don't block the system for continuing on - "do something in the future"
// Javascript engine sets up a timer and says whenever that timer goes off, that's when it's time to schedule this callback
// Timers aren't exactly precise, because nothing can interrupt that single-threaded event loop 

// The bad thing is that even in the simplest scenario our brains are not expecting code to run 
// in the way that it will run: 
// we see - line one happens now and line two happens later, for some arbitrary definition of later 
// we wrap up part of our program in a function (callbacks == continuations)
// The reason that callback hell happens is because of an ordering dependency
// "Two cannot even start until after one finishes"
// Callback hell is not necessarily about nesting and indentation. Can happen just as well w/ organized calls

// The design of the callback by itself does not help w/ the fundamental shortcoming that comes from callback hell
