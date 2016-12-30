var redux = require('redux');

console.log('Start learning Redux');

var stateDefaul = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = stateDefaul, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      }
    default:
      return state;
  }
};
var store = redux.createStore(reducer);

console.log('currentState', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
});
console.log('searchText should be "work"', store.getState());
