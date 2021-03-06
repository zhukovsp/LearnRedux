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
var store = redux.createStore(reducer, redux.compose(
  // window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var subscribe = store.subscribe(() => {
  var state = store.getState();

  document.getElementById('app').innerHTML = state.searchText;
});

console.log('currentState', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'dog'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'something else'
});
console.log('searchText should be "work"', store.getState());
