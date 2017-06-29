import { combineReducers } from 'redux';
//import fuelSavings from './fuelSavingsReducer';
import providersData from './providersReducer';
import searchParams from './searchParamsReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	//fuelSavings,
	providersData,
	searchParams,
	routing: routerReducer
});

export default rootReducer;
