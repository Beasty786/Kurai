import React from 'react';
import './sign-in.styles.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Import components
import CustomButton from '../custom-button/custom-button.component';
import CustomInput from '../custom-input/custom-input.component'

//import redux actions
import { onSigUpClick } from '../../redux/signinState/formRecucer.action'

const SignIn =({formState}) => {
   

        return (
            <div>
                <div className="signin-form">
                    <form action="" >
                        { Object.keys(formState.data).map(item => (<CustomInput holder={formState.data[item]+"*"} type = {item} required={true}/>))}
                        <div className="button-holder">
                            <Link className="forgot-pass" to="/"> forgot password</Link>
                            <CustomButton text="Sign In" className="button" />
                        </div>
                    </form>
                    <hr/>
             
                </div>
           
            </div>
        );
    
        
}


const mapstateToprops = ({ formState })=>({
    formState
})

const mapDispatchToProps = dispatch =>({
    click : data=> dispatch(onSigUpClick(data))
})

export default connect(mapstateToprops , mapDispatchToProps)(SignIn);