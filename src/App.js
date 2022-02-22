import React,{useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [

    { 
      id:'e1',
      title:"New TV",
      amount:200.5,
      date:new Date(2021,2,3)},

    {
      id:'e2',
      title:"Car Insurance",
      amount:300.5,
      date:new Date(2021,8,3)},

    {
      id:'e3',
      title:"New TV",
      amount:100.23,
      date:new Date(2021,12,3)},
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
      },
  ]


const App=()=>{
 
  const [expenses,setExpenses] =useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses =>{
      return [expense,...expenses];
    })
  }
  return(
        <div> 
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses}/>
        </div>

  )
}
 

export default App;