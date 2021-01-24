import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";
import InputDropdown from '../input-dropdown/input-dropdown.component';

const SignUp = ({data , signUpAs}) =>{
    console.log(signUpAs);
    return(
        <form action="">
        
            <CustomInput holder="First Name*" type="text" required={true}/>
            <CustomInput holder="Last Name*" type="text" required={true}/>
            <CustomInput holder="Mobile Number*" type="text" required={true}/>
            <CustomInput holder="Email*" type="email" required={true}/>
            {
                signUpAs === "partner"?
                    <CustomInput holder="Organization Name*" type="text" required={true}/>
                    :
                    <CustomInput holder="Farm Name (optional)" type="text" required={true}/>
                     
            }
            <InputDropdown holder="Select Country" data={data} required={true}/>
            <InputDropdown holder="-" data={data} required={true}/>

            {
                signUpAs === "farmer"?
                null
                :
                <div>
                    <CustomInput holder="Farm size*" type="email" required={true}/>
                    <CustomInput holder="Crop Grown*" type="email" required={true}/>
                </div>
            }
            
            <CustomInput holder="Password*" type="password" required={true}/>
            
            <hr/>
            <div className="button-holder">
                    <p className="signup-text">Back</p>
                    <CustomButton text="Sign Up" className="button" inverted={true} />
            </div> 

        </form>
    )
}



export default SignUp;