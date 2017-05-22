import { PROVIDER_SEARCH_API_URL } from '../constants/url';

export const SET_PROVIDERS = 'SET_PROVIDERS';

export function searchProvider() {
    console.log(PROVIDER_SEARCH_API_URL);
    return dispatch => {
        fetch(`${PROVIDER_SEARCH_API_URL}/GetAllDropDownItems`)
            .then(res => res.json())
          //.then(res => res.results)
            .then(providers => dispatch(setProviders(providers)));
    };
}

export function setProviders(providers) {
    console.log('action call', providers);
    return {
        type: SET_PROVIDERS,
        providers
    }
}