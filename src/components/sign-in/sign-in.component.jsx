import React from 'react';
import './sign-in.styles.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Import components
import CustomButton from '../custom-button/custom-button.component';
import CustomInput from '../custom-input/custom-input.component'
import Modal from '../signup-modal/modal.component';

//import redux actions
import { onSigUpClick } from '../../redux/signinState/formRecucer.action'

const SignIn =({formState, click}) => {
   
    console.log(formState, click);

        return (
            <div>
                <div className="signin-form">
                    <form action="" >
                        { Object.keys(formState.data).map(item => (<CustomInput holder={formState.data[item]} type = {item}/>))}
                        <div className="button-holder">
                            <Link className="forgot-pass" to="/"> forgot password</Link>
                            <CustomButton text="Sign In" className="button" />
                        </div>
                    </form>
                    <hr/>
                    <div className="button-holder">
                        <p className="signup-text">Sign up for new account</p>
                        <CustomButton text="Sign Up" className="button" inverted={true} func={() => click(formState)}/>
                    </div> 
                    
                </div>
                {
                    formState.sign ? <Modal className="modal__shown"/> : ''
                }
                   
            
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