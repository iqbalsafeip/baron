import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import mainReducer from './reducers/main';

const rootReducers = combineReducers({
  mainReducers: mainReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
