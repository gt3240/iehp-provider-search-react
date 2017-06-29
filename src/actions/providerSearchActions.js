import { PROVIDER_SEARCH_API_URL } from '../constants/url';
require('es6-promise').polyfill();
require('isomorphic-fetch');
export const SET_PROVIDERS = 'SET_PROVIDERS';
export const SET_PROVIDER_TYPE = 'SET_PROVIDER_TYPE';

export function searchProvider(payload) {
    console.log('ACTION DISPATCHING -------------------------------');
    console.log(PROVIDER_SEARCH_API_URL);
    console.log('payload is ', payload);
    return dispatch => {
        fetch(`${PROVIDER_SEARCH_API_URL}/GetSpecificProviderList/10/1`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(res => dispatch(setProviders(res)));
            
    };
}

export function getDropDowns() {
    console.log(PROVIDER_SEARCH_API_URL);
    return dispatch => {
        fetch(`${PROVIDER_SEARCH_API_URL}/GetAllDropDownItems`)
            .then(res => res.json())
            //.then(res => res.results )
            .then(providers => dispatch(setProviders(providers)));
    };
}

export function setProviderType(providerType){
    return {
        type: SET_PROVIDER_TYPE,
        providerType
    }
}

function setProviders(providersData) {
    console.log('ACTION ---- setProvider', providersData);
    return {
        type: SET_PROVIDERS,
        providersData
    }
}