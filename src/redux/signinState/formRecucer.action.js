import { ONCLICK_SIGNUP } from "./formReducer.types";

export const onSigUpClick = data =>{
    return{
        type:ONCLICK_SIGNUP,
        payload: data
    }
}