import { SET_PROVIDER_TYPE } from '../actions/providerSearchActions';

export default (state = {'providerType' : 'SPEC'}, action) => {
    switch (action.type) {

        case SET_PROVIDER_TYPE: // search param - provider type
            console.log('REDUCER / searchParams----- here', action);
            return {...state, providerType: action.providerType}
        default:
            return state;
    }
};