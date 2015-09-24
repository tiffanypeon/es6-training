// template literals -- interpolated string literals

// no difference between double and single quote delimeters 

// new delimeter for strings is the backtick

var x = `Hello world`; // this one can be interpolated
var x = "Hello world";

var name = 'dude'
var x = `Hello ${name}`; // interpolation syntax
console.log(x); // 'Hello dude'

// can also multi line a string

var x = `Hello ${name}

world` // not the same as a string w/ new lines in it

var x = "Hello\
World"; // string w/ new lines in it

function foo() {
  var x = 2;
  return `Hello: ${x}`;
}

function bar() {
  var x = 3;
  var t = foo();
  console.log(t);
}

bar(); // Hello: 2 -- prints out value of x within scope of foo

function foo(strings, ...values) {
  console.log(strings); // [ 'Hello', '!' ] -- non interpolated part of the strings broken up into their chunks
  console.log(values); // ['bob'] -- all interpolated values, broken up into their chunks

  var s = strings[0];
  for (var i=1; i<strings.length; i++) {
    s = s + values[i-1] + strings[i];
  }
  return s;
};

var friend = 'bob'
var x = foo`Hello ${friend}!`; // can put an expression immediately in front of a string literal
//expression is a specialized function call that passes in all the pieces of the string 
// would end up with 'Hello bob!'
//^^ called a tagged template literal -- foo is called a tag

function money(strings, ...values) {
  strings.raw; // property that returns unescaped values 
}


