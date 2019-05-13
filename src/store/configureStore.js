import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/auth';
import blogReducer from '../reducers/blogReducer';
import filtersReducer from '../reducers/filterReducer';

// setup thunk to work with our developer tools
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line


// This is how you export the store!!
export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      blogs: blogReducer,
      filters: filtersReducer
    }),
    composeEnchancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
