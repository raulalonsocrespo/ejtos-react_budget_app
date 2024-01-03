import React, { useContext, useState } from 'react';

const Currency = () => {

    
    const currencySelector = {
        backgroundColor: 'rgb(147, 228, 153)',
        borderTop: '1px solid white',
        borderRight: '3px solid white',
        borderLeft: '3px solid white',
        borderBottom: '3px solid white',
        color: 'white',
        padding: '2vh 2vh 2vh 2vh',
        fontSize: '1.2rem',
        borderRadius: '0.55rem',
        Width: '70%',
        texAlign: 'center'
    };

    const currencyOpt = {
        minHeight: '4vh',
        border: 'none',
        color: 'black',
        backgroundColor: 'rgb(147, 228, 153)',
    };

    return (
        <div className='currencyHeader'>
            <select id="currency" style={currencySelector}>
                <option value="$" style={currencyOpt}><span>Currency (</span>$ Dollar<span hidden>)</span></option>
                <option value="£" style={currencyOpt} selected><span hidden>Currency (</span>£ Pound<span hidden>)</span></option>
                <option value="€" style={currencyOpt}><span hidden>Currency (</span>€ Euro<span hidden>)</span></option>
                <option value="₹" style={currencyOpt}><span hidden>Currency (</span>₹ Ruppee<span hidden>)</span></option>
            </select>
        </div>
    );
};
export default Currency;