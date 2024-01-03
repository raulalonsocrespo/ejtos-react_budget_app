import React, { useContext, useState } from 'react';

const Currency = () => {

    const currencyBox = {
        backgroundColor: 'rgb(147, 228, 153)',
        borderBottom: '1vh solid white',
        color: 'white',
        paddingLeft: '3vh',
        paddingRight: '3vh',
        paddingTop: '1vh',
        paddingBottom: '0vh',
        fontSize: '1.2rem',
        borderRadius: '0.375rem',
        maxWidth: '75%',
        heigt: '37px'
    };

    const currencySelector = {
        backgroundColor: 'rgb(147, 228, 153)',
        borderTop: 'none',
        borderRight: 'none',
        borderLeft: 'none',
        borderBottom: '1vh solid white',
        color: 'white',
        padding: '2vh 2vh 3vh 2vh',
        fontSize: '1.2rem',
        borderRadius: '0.375rem',
        Width: '70%',
        texAlign: 'center',
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
                <option value="$" style={currencyOpt}><span hidden>Currency (</span>$ Dollar<span hidden>)</span></option>
                <option value="£" style={currencyOpt} selected><span hidden>Currency (</span>£ Pound<span hidden>)</span></option>
                <option value="€" style={currencyOpt}><span hidden>Currency (</span>€ Euro<span hidden>)</span></option>
                <option value="₹" style={currencyOpt}><span hidden>Currency (</span>₹ Ruppee<span hidden>)</span></option>
            </select>
        </div>
    );
};
export default Currency;