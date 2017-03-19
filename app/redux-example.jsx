var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;

// var oldreducer = (state = stateDefault, action) => {
//    switch (action.type) {
//     case 'CHANGE_NAME':
//      return {
//        ...state,
//        name: action.name
//      };
//      case 'ADD_HOBBY':
//      return {
//        ...state,// to keep the name property around. (Andrew)
//        hobbies: [
//          ...state.hobbies, // all the existing hobbies.
//          {
//            id: nextHobbyId++,
//            hobby: action.hobby
//          }
//        ]
//      };
//      case 'REMOVE_HOBBY':
//      return {
//        ...state,
//        hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)//-> no semicolom in object definition!!
//      };
//      case 'REMOVE_MOVIE':
//      return {
//        ...state,
//        movies: state.movies.filter((movie) => movie.id !== action.id)
//        };
//      case 'MOVIE_ADD':
//      return {
//        ...state,
//        movies: [ // to only overrrides movies.
//          ...state.movies,
//          {
//            id: nextMovieId++,
//            title: action.title,
//            genrer: action.genrer
//          }
//        ]
//      };
//      default:
//       return state;
//   }
// };



var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
    return action.name
    default:
    return state;
  };
};

var hobbiesReducer = (state =[], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
    return [
      ...state, // all the existing hobbies.
      {
        id: nextHobbyId++,
        hobby: action.hobby
      }
    ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id)
    default:
      return state;
  }
};

var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'MOVIE_ADD':
    return [
      ...state,
      {
        id: nextMovieId++,
        title: action.title,
        genrer: action.genrer
      }
    ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id)
    default:
      return state;
  }

};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
})

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => { // takes a function u would like to call everytime ur state changes
   var state = store.getState();
 //console.log('Name is', state.name);
//console.log('New state', state.hobbies);// to b able to see everything that changes in the state.
  console.log('New state', store.getState());
  document.getElementById('app').innerHTML = state.name;
});


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
store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'fishing'
});
store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'MOVIE_ADD',
  title: 'Slumber party',
  genrer: 'fantasy'
});
store.dispatch({
  type: 'MOVIE_ADD',
  title: 'Loopers',
  genrer: 'action'
});
store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});
store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});
