import { ONCLICK_SIGNUP , TO_FARMER_SIGNUP , TO_PARTNER_SIGNUP ,TO_SIGNIN} from "./formReducer.types";

export const onSigUpClick = data =>{
    return{
        type:ONCLICK_SIGNUP,
        payload: data
    }
}

export const toFarmerSignUp = (data) => {
    return{
        type: TO_FARMER_SIGNUP,
        payload: data
    }
}

export const toPartnerSignUp= (data) => {
    return{
        type: TO_PARTNER_SIGNUP,
        payload: data
    }
}

export const toSignIn = (data) =>({
 type: TO_SIGNIN,
 payload:data  
})