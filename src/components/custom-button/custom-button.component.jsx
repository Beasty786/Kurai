import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({text , inverted , func}) =>{
    return (
        <button className={inverted?"custom-button inverted":"custom-button"} onClick={ func } >{text}</button>
    );
};


export default CustomButton;