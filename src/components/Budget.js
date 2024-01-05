import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upper_budget = 20000;
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        if(newBudget > upper_budget) {
            alert("The value cannot exceed £" + upper_budget +
                ", the upper limit for the budget.");
            setNewBudget(upper_budget);
        } else if(newBudget < totalExpenses){
            alert("You cannot reduce the budget value lower than the expending, " +
                "£" + totalExpenses);
            setNewBudget(totalExpenses);
        } else {
            setNewBudget(event.target.value);
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type="number" step="10" value ={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
