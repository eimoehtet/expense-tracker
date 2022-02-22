import React from 'react';
import './ExpensesList.css';
import ExpenseItem from '../Expenses/ExpenseItem';
const ExpensesList = (props) =>{
    let filtlerContext=<p>No Expenses found</p>;
    if(filtlerContext.length === 0){
        <p><h2>No pages found</h2></p>
    }
    return (
        props.items.map((expense)=>(
            <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
        ))
    )
}
export default ExpensesList;