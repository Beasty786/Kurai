import { combineReducers } from 'redux';

import formReducer from './signinState/formReducer'
import partnerState from './signupState/partner';
import farmerState from './farmerState/farmer';

export default combineReducers({
    formState: formReducer,
    farmer: farmerState,
    partner: partnerState

});