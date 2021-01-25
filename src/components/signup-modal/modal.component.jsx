import React from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onSigUpClick ,toFarmerSignUp , toPartnerSignUp } from '../../redux/signinState/formRecucer.action';


// import styles
import './modal.styles.scss';

// import components
import CustomButton from '../custom-button/custom-button.component'

const Modal = ({formState , click ,toPartner ,toFarmer}) =>{

    return(
        <div className ="modal">
            <div className="modal__Buttons_holder">
                
                    <Link to={{
                        pathname:'/signup', 
                    }} className="modal__button">
                        <CustomButton text="Sign up as partner" func={() => toPartner(formState)}/> 
                        
                    </Link>

                    <Link  to="/signup" className="modal__button">
                        <CustomButton text="Sign up as farmer" inverted={true} func={() => toFarmer(formState)}/>
                    </Link>

            </div>
            <p className="modal__info">For mor details on the account types please visit <a href="https://kura.co">kura.co</a></p>
        </div>
    );

}
const mapStateToProps= state =>({
    formState: state.formState
});

const mapDispatchToProps = dispatch =>({
    click : data => dispatch(onSigUpClick(data)),
    toFarmer: data => dispatch(toFarmerSignUp(data)),
    toPartner: data => dispatch(toPartnerSignUp(data))
})


export default connect(mapStateToProps , mapDispatchToProps)(Modal);
