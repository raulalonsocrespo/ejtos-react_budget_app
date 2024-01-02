import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const [currency, setNewCurrency] = useState('');

    const currencyBox = {
        backgroundColor: 'rgb(147, 228, 153)',
        minHeight: '8.3vh',
        border: 'none',
        borderRadius: '1vh',
        fontSize: '14px + 2vmin',
        color: 'white',
        paddingLeft: '3vh'
    };

    const currencySelector = {
        background: 'rgb(147, 228, 153)',
        minHeight: '8.3vh',
        border: 'none',
        color: 'white'
    };

    const currencyOpt = {
        minHeight: '4vh',
        border: 'none',
        color: 'black'
    };

    return (
        <div className='currencyHeader' style={currencyBox}>
            <label for="currency">Currency (</label>
            <select id="currency" style={currencySelector}>
                <option value="$" style={currencyOpt}>$ Dollar</option>
                <option value="£" style={currencyOpt} selected>£ Pound</option>
                <option value="€" style={currencyOpt}>€ Euro</option>
                <option value="₹" style={currencyOpt}>₹ Ruppee</option>
            </select>
            <label for="currency">)</label>
        </div>
    );
};
export default Currency;