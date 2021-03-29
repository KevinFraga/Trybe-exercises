import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import newClientReducer from './newClientReducer';

const rootReducer = combineReducers({
  loginReducer,
  newClientReducer,
});

export default rootReducer;
