import React from 'react';
import {
    BrowserRouter as Router ,
    Switch,
    Route,
    Link    
} from 'react-router-dom';
import { connect } from 'react-redux';
import { onSigUpClick  , toSignIn} from '../../redux/signinState/formRecucer.action';

import './auth-page.scss'

// import components
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Modal from '../../components/signup-modal/modal.component';



const AuthPage = ({formState, click ,toSign_In}) =>{
    const data = {sa:'South Africa' , le:'Lesotho'}; // duummy data for country drop down

    const handleClick = () =>{
        if(formState.form !== 'sign-in'){
            toSign_In(formState);
        }
    }

    return(
        <div className="App">
                <div className="App-header">
                    <div className="text-holder">
                        <h1> HELPING FARMERS REAP A FULL HARVEST</h1>
                        <hr/>
                        <h4> Every farmer deserves to reap a full harvest. We make this a reality by offering you state of the art precision agriculture service</h4>
                        <CustomButton text="Connect with us"/>
                    </div>
                    
                    <img src="https://2.bp.blogspot.com/-E_Av649tUDQ/XDgb1YAOjBI/AAAAAAAAnec/hUxB2xNTt6AI0F3CGT8ywcISyvGX9fIEQCLcBGAs/s1600/woman_farming.jpg" alt=""/>
                </div>

                <div className="forms">
                    <img src="https://www.kurai.co/images/logo/logo2.png" alt="kurai" className="logo"/>
                    <Router>
                        <Switch>
                            <Route exact path="/" > <SignIn/> </Route>
                            <Route path="/signup" > <SignUp data={data} signUpAs={formState.form}/></Route> 
                        </Switch>
                        {
                            formState.sign ? <Modal className="modal__shown"/> : ''
                        }
                        
                        <div className="signin-form">
                            <div className="button-holder">
                                <Link className="signup-text" to="/" onClick={() => handleClick()}>
                                    {
                                        formState.form === 'sign-in'?
                                        'Sign in with new account'
                                        :
                                        <i class="fa fa-arrow-left" aria-hidden="true">  Back  </i> 
                                    }
                                     
                                </Link>
                                <CustomButton text="Sign Up As" className="button" inverted={true} func={() => click(formState)}/>
                            </div>
                        </div>
                    
                    </Router>
                    
                </div>    
        </div>
  );
    
}

const mapStateToProps= (state) =>({
    formState: state.formState,
   
});

const mapDispatchToProps = dispatch =>({
    click : data => (dispatch(onSigUpClick(data))),
    toSign_In : data => dispatch(toSignIn(data))
})

export  default connect(mapStateToProps,mapDispatchToProps)(AuthPage);