import { combineReducers } from 'redux';
import servicesReducer from './servicesReducer';

const rootReducer = combineReducers({
  servicesReducer,
  // add more reducers here
});

export default rootReducer;
