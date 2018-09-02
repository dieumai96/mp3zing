import { combineReducers } from 'redux';
import weather from './weather';
import auth from './auth';

export default combineReducers({
  weather : weather,
  auth : auth,
})