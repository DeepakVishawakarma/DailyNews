import { combineReducers } from 'redux';
import newsReducer from './newsReducer';

const AppReducer = combineReducers({
  newsReducer,
});

export default AppReducer;
