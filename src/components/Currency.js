import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const currencyBox = {
        backgroundColor: 'rgb(147, 228, 153)',
        color: 'white',
        fontSize: '1.2rem',
        borderRadius: '0.375rem',
        maxWidth: '100%',
        borderBottom: '3px solid white',
        padding: '0vh 2vh 0vh 2vh'
    };
    
    const currencySelector = {
        backgroundColor: 'rgb(147, 228, 153)',
        color: 'white',
        border: 'none',
        padding: '0vh 0vh 0vh 0vh',
        textAlign: 'center',
        display: 'initial'
    };
   
    let currencyOpt = {
        minHeight: '4vh',
        border: 'none',
        color: 'black',
        backgroundColor: 'rgb(147, 228, 153)',
        width: '2rem',
        textAlign: 'left'
    };

    const changeBackgroundFormat = (event) => {
        
    };

    const [currency, setCurrency] = useState('£ Pound');

    const changeCurrency = (value) =>{
        setCurrency(value);
        document.getElementById('currency').value = ""
    };

    return (
        <div className='currencyHeader' style={currencyBox}>
            <span>Currency ({currency})</span>
            <div>
            <select id="currency" style={currencySelector} onChange={(event) => changeCurrency(event.target.value)} onMouseOver={changeBackgroundFormat}>
                <option value="$ Dollar" style={currencyOpt}>$ Dollar</option>
                <option value="£ Pound" style={currencyOpt}>£ Pound</option>
                <option value="€ Euro" style={currencyOpt}>€ Euro</option>
                <option value="₹ Ruppee" style={currencyOpt}>₹ Ruppee</option>
            </select>
            </div>
        </div>
    );
};
export default Currency;