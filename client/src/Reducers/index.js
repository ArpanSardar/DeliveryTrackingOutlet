import { combineReducers } from 'redux';
import locationFinderReducer from './locationFinderReducer';

export default combineReducers({
  address: locationFinderReducer
});
