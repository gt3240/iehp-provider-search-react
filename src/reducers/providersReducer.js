import { SET_PROVIDERS } from '../actions/providerSearchActions';

export default (state = [], action) => {
  console.log('reducer here', action);
  switch (action.type) {
    case SET_PROVIDERS:
      return action.providers;
    default:
      return state;
  }
};