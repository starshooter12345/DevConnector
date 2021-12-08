/*import { combineReducers} from 'redux';
import alert from './alert';
export default combineReducers({
    alert

});*/
import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';

export default combineReducers({
  alert,
  auth
  
});