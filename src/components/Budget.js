import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upper_budget = 20000;
    const handleBudgetChange = (event) => {
        if(newBudget > upper_budget) {
            alert("The value cannot exceed £" + upper_budget +
                ", the upper limit for the budget.");
            setNewBudget(upper_budget);
            return;
        } else if(newBudget < 960){
            alert("You cannot reduce the budget value lower than the expending, " +
                "£960");
            setNewBudget(960);
            return;
        } else {
            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value ={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
