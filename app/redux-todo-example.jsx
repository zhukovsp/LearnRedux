var redux = require('redux');

console.log('Start learning Redux');

var stateDefaul = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = stateDefaul, action) => {
  return state;
};
var store = redux.createStore(reducer);

console.log('currentState', store.getState());
