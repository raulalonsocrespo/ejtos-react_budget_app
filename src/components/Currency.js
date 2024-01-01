const Currency = () => {
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
        backgroundColor: 'rgb(147, 228, 153)',
        minHeight: '8.3vh',
        border: 'none',
        fontSize: '14px + 2vmin',
        color: 'white',
        paddinRight: '3vh'
    };

    return (
        <div className='currencyHeader' style={currencyBox}>
            <label for="currency">Currency (</label>
            <select id="currency" style={currencySelector}>
                <option className = 'currencyOpt'>$ Dollar</option>
                <option className = 'currencyOpt' selected>£ Pound</option>
                <option className = 'currencyOpt'>€ Euro</option>
                <option className = 'currencyOpt'>₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;