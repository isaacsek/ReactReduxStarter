import { combineReducers } from 'redux';
import mainReducer from './main_reducer';

const rootReducer = combineReducers({
  rootReducer: mainReducer,
});

export default rootReducer;
