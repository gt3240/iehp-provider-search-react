import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import providers from './providersReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  providers,
  routing: routerReducer
});

export default rootReducer;
