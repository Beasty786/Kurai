import { ONCLICK_SIGNUP } from "./formReducer.types";


const initialState = {
    data:{ 
        email: 'Email',
        password: 'Password'
    },
    sign: false,
    form: 'sign-in'
}

export default function formReducer(state = initialState , action ){
    switch (action.type) {
        case ONCLICK_SIGNUP:
            return {
                ...state, 
                sign: !action.payload.sign
            }
            break;
        default:
            return initialState;
            break;
    }
}