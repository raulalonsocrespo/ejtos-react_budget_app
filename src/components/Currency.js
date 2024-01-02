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
        color: 'white'
    };
    const currencyOpt = {
        minHeight: '4vh',
        border: '20px solid black',
        color: 'black',
        paddingRight: '3vh'
    };

    return (
        <div className='currencyHeader' style={currencyBox}>
            <label for="currency">Currency (</label>
            <select id="currency" style={currencySelector}>
                <option style={currencyOpt}>$ Dollar</option>
                <option style={currencyOpt} selected>£ Pound</option>
                <option style={currencyOpt}>€ Euro</option>
                <option style={currencyOpt}>₹ Ruppee</option>
            </select>
            <label for="currency" >)</label>
        </div>
    );
};
export default Currency;