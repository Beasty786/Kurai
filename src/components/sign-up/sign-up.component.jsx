import React from "react";
import { connect } from 'react-redux';
import {BrowserRouter as Router , Link} from 'react-router-dom';

//import components
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";
import InputDropdown from '../input-dropdown/input-dropdown.component';


const SignUp = (props ) =>{
    const {data , signUpAs } = props;
   
    
    return(
        <div  className="signin-form">
            <form >
        
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

                {   //conditional rendering
                    signUpAs === 'partner'?
                    null
                    :
                    <div>
                        <CustomInput holder="Farm size*" type="email" required={true}/>
                        <CustomInput holder="Crop Grown*" type="email" required={true}/>
                    </div>
                }
                
                <CustomInput holder="Password*" type="password" required={true}/>
                <div className="button-holder">
                    <p></p>
                    <CustomButton text="submit"/>
                </div>
                <hr/>
        
            </form>
        </div>
        
    )
}

const mapStateToProps = state =>({
    formstate: state.formState
})

export default connect(mapStateToProps)(SignUp);