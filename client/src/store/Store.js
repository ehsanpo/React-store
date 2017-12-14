import { applyMiddleware, combineReducers, createStore } from 'redux';

// actions.js
export const Authenticated = login => ({
  type: 'loggedin',
  login,
});

// reducers.js
export const login = (state = {value:0}, action) => {
  switch (action.type) {
    case 'loggedin':
      return action.login;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  login,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
