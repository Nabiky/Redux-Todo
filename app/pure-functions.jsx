var redux = require('redux');

console.log('Starting redux example');

//our pure function can't have any async request,
//meaning not promises or callbacks

//Pure function
function add (a, b) {
  return a + b;
}

//Not pure
var a = 3;
function add (b) {
  return a + b;
}

//Not Pure
var result;
function add (a, b){
  result = a + b;
  return result;
}

//Not Pure ->
function add(a, b) {
  return a + b + new Date().getSeconds();
}

//  Another criteria for Pure functions is that they are not allow
// to update the value that gets pass in. (this really only matter
// for objects and array which are pass by reference & not by value)

function changeProp(obj) {
  return {
    ...obj,
    name: 'Jen'
  };
 // obj.name = 'Jen';
 // return obj;
}

var startingValue = {
  name: 'Andrew',
  age: 25
}

var res = changeProp(startingValue);

// var res = changeProp({
//   name: 'Andrew'
// });
console.log(startingValue);
console.log(res);

// 1) Avoid promises and async callbacks in redux?
// 2)
// 3)
