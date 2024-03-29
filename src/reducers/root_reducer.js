import { combineReducers } from 'redux';
import UIReducer from './ui_reducer';

const RootReducer = combineReducers({
  ui: UIReducer
});

export default RootReducer;
