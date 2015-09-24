// Object literals

// referring to left-hand side of assignment

var obj = {
  a, b, c // concise properties we're using
  d() { // concise method definition
    console.log('...');
  },
  ['x' + a]: 42 // computed property -- any regular js expression can go w/in the square brackets
};

// Concise methods are anonymous ("without the lexical name")
// if you have code where you're relying upon to function name somewhere within the function, 
// you still need to keep the old syntax 
// reasoning is so you don't use a weird method name (like a string value)

// Computed properties cannot be concise

// Getters and setters: 

var a = 1, b =2, c = 3

var obj = {
  get a() {
    return a;
  }
  set a(v) {
    a = v;
  }
};

obj.a = 42; 
obj.a; // 42
a; // 42 


var obj1 = {
  foo: 42
};

var obj2 = {
  bar: 12
};

Object.setPrototypeOf(obj2, obj1) // links obj2 to obj1

obj2.foo // foo

//as of es6: 
// below won't work in es5 supported browser
var obj2 = {
  __proto__: obj1,
  bar: 12
}

//other option -- compatible w/ es5
var obj2 = Object.assign(Object.create(obj1), {
    bar: 12
  };
)

// use of super -- can only use w/ concise methods
var obj1 = {
  foo: 42
};

var obj2 = {
  __proto__: obj1,
  foo: 10,
  bar() {
    console.log( this.foo + super.foo );
  }
};

var obj3 = {
  foo: 5
};

var obj4 = {
  __proto__: obj3
  foo: 10,
  bar: obj2.bar
};

obj4.bar(); // expect it to return 15, but super is statically bound -- so we get back the foo from obj1. -- returns 52
