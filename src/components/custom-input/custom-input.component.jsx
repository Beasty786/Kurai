import React from 'react';
import './custom-input.styles.scss';

const CustomInput = ({holder , type , required}) =>{
    return (
        <input type="text" className="input" placeholder={holder} type={type} required={required? required:null}/>
   );
}

export default CustomInput;