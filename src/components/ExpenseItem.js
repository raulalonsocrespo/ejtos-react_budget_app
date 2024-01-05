import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    const buttonIncrease = {
        borderRadius: '50%',
        backgroundColor: 'rgb(79, 172, 92)',
        fontSize: '1em',
        fontWeight: 'bolder',
        border: 'none',
        padding: '0vh 1.2vh 0.75vh'
    };

    const textButton = {
        color: 'white',
        fontSize: '135%'
    }

    const buttonDecrease = {
        borderRadius: '50%',
        backgroundColor: '#AF2419',
        fontSize: '1em',
        fontWeight: 'bolder',
        border: 'none',
        padding: '0vh 1.5vh 0.75vh'
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><button style={buttonIncrease} onClick={event=> increaseAllocation(props.name)}><span style={textButton}>+</span></button></td>
        <td><button style={buttonDecrease} onClick={event=> decreaseAllocation(props.name)}><span style={textButton}>-</span></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
