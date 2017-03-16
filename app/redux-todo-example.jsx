var redux =  require('redux');

console.log('Starting redux todo example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {
  switch(action.type) {
     case 'CHANGE_SEARCHTEXT':
         return {
            ...state,
            searchText: action.searchText
          };
          default:
            return state;
         }
  };

var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

var unsubscribe = store.subscribe(() => { // takes a function u would like to call everytime ur state changes
  var state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
});


// console.log('currentState', store.getState());

var action = {
   type: 'CHANGE_SEARCHTEXT',
  searchText: 'Walk'
};

store.dispatch(action);

store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'Eat'
});

//unsubscribe();
store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'Dance'
});
 // console.log('SearchText should be "Walk"', store.getState());
