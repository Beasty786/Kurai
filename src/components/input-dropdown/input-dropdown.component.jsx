import React from 'react';

const InputDropdown = ({holder ,data}) =>{
    return (
        <div>
            <input type="text" className="input" placeholder={holder} type="none" list="list"/>
            <datalist id="list">
                {Object.keys(data).map(key => (<option value = {data[key]}/>))}
            </datalist>
        </div>
        
   );
}

export default InputDropdown;