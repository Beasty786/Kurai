import { ONCLICK_SIGNUP , TO_FARMER_SIGNUP , TO_PARTNER_SIGNUP , TO_SIGNIN} from "./formReducer.types";


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
        case TO_FARMER_SIGNUP:
            return {
                ...state,
                sign: !action.payload.sign,
                form: 'farmer'
            }
            break;
        case TO_PARTNER_SIGNUP:
            return {
                ...state,
                sign: !action.payload.sign,
                form: 'partner'
            }
            break;
        case TO_SIGNIN:
            return {
                ...state,
                form: 'sign-in'
            }
            break;
        default:
            return initialState;
            break;
    }
}