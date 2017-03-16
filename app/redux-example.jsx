var redux = require('redux');

console.log('Starting redux example');

var reducer = (state ={name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};

  // console.log('New action', action);
   switch (action.type) {
    case 'CHANGE_NAME':
     return {
       ...state,
       name: action.name
     };
     default:
      return state;
  }
};

var store = redux.createStore(reducer); // this createStore method takes one argument
                                       // which needs to be a pure function (reducer).

var currentState = store.getState();
console.log('currentState 1', currentState);

//A reducer takes your existent state and actions as arguments,
//and return the new state

var action = {
  type: 'CHANGE_NAME',
  name: 'Andrew'
};
store.dispatch(action);

console.log('Name should be andrew', store.getState());
