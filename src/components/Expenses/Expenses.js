import React, { useState } from "react";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "../NewExpense/ExpensesList";
import ChartExpenses from "./ChartExpenses";
const Expenses=(props)=>{

   const [filterYear,setFilterYear]= useState('2019');

    const changeFilterHandler = (selectedYear) => {
        setFilterYear(selectedYear);
    }
    const filteredExpenses=props.items.filter(expense=>{
        return expense.date.getFullYear().toString()===filterYear;
    })

    return(
        <div >
        <Card className='expenses'>
        <ExpensesFilter selected={filterYear} onChangeFilter={changeFilterHandler}/>
        <ChartExpenses expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        </Card>
        </div>
    )
}
export default Expenses;