import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { loadUserData } from './localStorage';

const initialState = {};

const middleware = [thunk];
const persistedData = {
  auth: {
    isAuthenticated: Boolean(loadUserData()),
    user: loadUserData(),
    errors: {},
  },
};
const store = createStore(
  rootReducer,
  persistedData,
  compose(applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store; 