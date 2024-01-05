import React, { useContext, useState, createContext} from 'react';
import { AppContext } from '../context/AppContext';

export default function Currency () {

    const currencyBox = {
        backgroundColor: 'rgb(147, 228, 153)',
        color: 'white',
        fontSize: '1.2rem',
        borderRadius: '0.375rem',
        maxWidth: '73%',
        top: '50%',
        left: '50%',
        padding: '0vh 2vh 0vh 2vh',
        textAlign: 'center'
    };
    
    const currencySelector = {
        width: '19px',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        padding: '2vh 0vh 2vh 0vh'
    };
   
    let currencyOpt = {
        width:'1000px',
        backgroundColor: 'rgb(147, 228, 153)',
        color: 'black',
        float: 'left',
        position: 'relative',
        padding: '1vh 5vh 1vh 3vh'
    };

    const { currency } = useContext(AppContext);
    const [newCurrency, setCurrency] = useState(currency);

    const changeCurrency = (value) =>{
        setCurrency(value);
    };

    let newCurrSymbol = newCurrency.charAt(0);

    return (
        <div className='currencyHeader' style={currencyBox}>
            <span>Currency ({newCurrency})</span>
            <select id="currency" style={currencySelector} onChange={(event) => changeCurrency(event.target.value)}>
                <option value="$ Dollar" style={currencyOpt}>$ Dollar</option>
                <option value="£ Pound" style={currencyOpt}>£ Pound</option>
                <option value="€ Euro" style={currencyOpt}>€ Euro</option>
                <option value="₹ Ruppee" style={currencyOpt}>₹ Ruppee</option>
            </select>
        </div>
    );
};

export const CurrencyContext = createContext();

export const CurrencyProvider = (props) => {

    return (
        <CurrencyContext.Provider
            value={{
                currencySymbol: props.newCurrSymbol
            }}
        >
            {props.children}
        </CurrencyContext.Provider>
    );
};