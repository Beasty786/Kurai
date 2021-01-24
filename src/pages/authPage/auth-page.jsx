import React from 'react';
import {
    BrowserRouter as Router ,
    Switch,
    Route,
    Link    
} from 'react-router-dom';
import { connect } from 'react-redux';
import { onSigUpClick } from '../../redux/signinState/formRecucer.action';

import './auth-page.scss'

// import components
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import Modal from '../../components/signup-modal/modal.component';



const AuthPage = ({formState, click }) =>{
    
    const data ={sa:'South Africa' , le:'Lesotho'};
    return(
        <div className="App">
            {formState.sign?'':''}
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
                            <Route exact path="/" > <SignIn/></Route>
                            <Route path="/signup" > <SignUp data={data} signUpAs='farmer'/></Route> 
                        </Switch>
                    </Router>
                    
                </div>

              
                
        </div>
  );
    
}

const mapStateToProps= (state) =>({
    formState: state.formState,
   
});

const mapDispatchToProps = dispatch =>({
    click : data => (dispatch(onSigUpClick(data)))
})

export  default connect(mapStateToProps,mapDispatchToProps)(AuthPage);