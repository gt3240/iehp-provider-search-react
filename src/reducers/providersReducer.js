import { SET_PROVIDERS } from '../actions/providerSearchActions';

export default (state = [], action) => {
	switch (action.type) {
		case SET_PROVIDERS: // provider search result
			console.log('REDUCER / provider ----- here', action);
			return action.providersData;
		default:
			return state;
	}
};