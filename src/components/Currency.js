import React, { useContext, useState } from 'react';

const Currency = () => {

    const currencyBox = {
        backgroundColor: 'rgb(147, 228, 153)',
        color: 'white',
        padding: '0vh 0vw 0vh 1vw',
        fontSize: '1.2rem',
        borderRadius: '0.375rem',
        width: '75%',
        texAlign: 'center',
        borderBottom: '3px solid white',
    };
    
    const currencySelector = {
        backgroundColor: 'rgb(147, 228, 153)',
        borderBottom: '3px solid white',
        color: 'white',
        padding: '2vh 0vh 2vh 0vh',
        texAlign: 'center'
    };

    const currencyOpt = {
        minHeight: '4vh',
        border: 'none',
        color: 'black',
        backgroundColor: 'rgb(147, 228, 153)'
    };

    const [currency, setCurrency] = useState('£ Pound');

    const changeCurrency = (value) =>{
        setCurrency(value);
        return <h1>Currency ({currency})</h1>
    };

    return (
        <div className='currencyHeader' style={currencyBox}>
            <span>Currency (</span>
            <select id="currency" style={currencySelector} onClick={(event) => changeCurrency(event.target.value)} >
                <option value="$" style={currencyOpt}>$ Dollar</option>
                <option value="£" style={currencyOpt} selected>£ Pound</option>
                <option value="€" style={currencyOpt}>€ Euro</option>
                <option value="₹" style={currencyOpt}>₹ Ruppee</option>
            </select>
            <span>)</span>
        </div>
    );
};
export default Currency;