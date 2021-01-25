import { combineReducers } from 'redux';

import formReducer from './signinState/formReducer'
export default combineReducers({
    formState: formReducer
});