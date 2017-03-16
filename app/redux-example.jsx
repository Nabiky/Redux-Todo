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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => { // takes a function u would like to call everytime ur state changes
  var state = store.getState();

  console.log('Name is', state.name);
  // document.getElementById('app').innerHTML = state.name;

});

// var currentState = store.getState();
// console.log('currentState 1', currentState);

var action = {
  type: 'CHANGE_NAME',
  name: 'Andrew'
};
store.dispatch(action);

// unsubscribe(); // will unsubscribe Jennifer and Edward.
store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jennifer'
});


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Edward'
});
