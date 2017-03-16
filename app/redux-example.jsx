var redux = require('redux');

console.log('Starting redux example');

var reducer = (state ={name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};
  return state;
};

var store = redux.createStore(reducer); // this createStore method takes one argument
                                       // which needs to be a pure function (reducer).

var currentState = store.getState();
console.log('currentState', currentState);

//A reducer takes your existent state and actions as arguments,
//and return the new state 
