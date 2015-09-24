//using thunks to manage time in async requests

function fakeAjax(url,cb) {
  var fake_responses = {
    "file1": "The first text",
    "file2": "The middle text",
    "file3": "The last text"
  };
  var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

  console.log("Requesting: " + url);

  setTimeout(function(){
    cb(fake_responses[url]); // so here we're using the callback variable passed in when we call this function
  },randomDelay); // fake_responses[url] is the 'text' variable used in getFile 
}

function output(text) {
  console.log(text);
}

// **************************************

function getFile(file) {
  var resp;

  fakeAjax(file,function(text){ // this callback is an anonymous function that takes the response of fakeAjax and takes some text
    if (!resp) resp = text; // if response hasn't been saved off, set it too text 
    else resp(text); //resp has been saved off as the callback function in the case that the code on line 30 executes first
  });

  return function th(cb) { // 
    if (resp) cb(resp); // if response has been set, then we can call it w/ the callback
    else resp = cb; // if it hasn't, store the callback as response 
  };
}

// request all files at once in "parallel"
var th1 = getFile("file1"); // getFile("file1") produces a thunk, so it needs to be saved off
var th2 = getFile("file2");
var th3 = getFile("file3");

// thunk makes value into a time-independent value 
th1(function ready(text){ // what does ready mean? \\ not used in live coding answer 
  output(text);
  th2(function ready(text){
    output(text);
    th3(function ready(text){
      output(text);
      output("Complete!");
    });
  });
});
