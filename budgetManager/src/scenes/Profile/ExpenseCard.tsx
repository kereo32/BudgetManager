import React from 'react';
import { Expense } from '../../global/types';

type Props = {
  expense: Expense;
  i: number;
};

function ExpenseCard(props: Props) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl">{props.i + 1}.Expense</h2>
      <h1 className="text-2xl">{props.expense.name}</h1>
      <p className="text-xl">{props.expense.amount}</p>
      <p className="text-xl">{props.expense.date.toString()}</p>
    </div>
  );
}

export default ExpenseCard;
