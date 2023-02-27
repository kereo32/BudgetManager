import { SyntheticEvent, useContext } from 'react';
import Modal from 'react-modal';
import { UserContext } from '../../context/userContext';
import validator from 'validator';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type props = {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
};

export function ExpenseForm(props: props) {
  const { user, setUser, addExpense } = useContext(UserContext);

  const handleClick = (e: any) => {
    e.preventDefault();
    const data = new FormData(document.getElementById('expenseform'));
    const expense = {
      name: data.get('name'),
      amount: data.get('amount'),
      date: data.get('date'),
    };
    if (expense.name && expense.amount && expense.date) {
      addExpense(expense);
      props.setOpen(false);
    } else {
      throw new Error('Invalid Expense. Please add a valid Expense');
    }
  };
  return (
    <Modal isOpen={props.isOpen}>
      <form id="expenseform" className="flex flex-col items-center mt-[10%]">
        <label className="text-2xl">Enter your expense name</label>
        <input
          onKeyDown={(e) => {
            validator.isAlpha(e.key) || e.key == '' ? null : e.preventDefault();
          }}
          id="name"
          name="name"
          type="text"
          className="border-2 border-black rounded-md px-2 py-1 mt-2"
        />
        <label className="text-2xl mt-4">Enter your expense amount</label>
        <input
          name="amount"
          onKeyDown={(e) => {
            validator.isNumeric(e.key) || e.key == '' || e.key == 'Backspace' ? null : e.preventDefault();
          }}
          type="text"
          className="border-2 border-black rounded-md px-2 py-1 mt-2"
        />
        <label className="text-2xl mt-4">Enter your expense date</label>
        <div className="border-2 border-black rounded-md px-2 py-1 mt-2 text-center">
          <DatePicker name="date" selected={new Date()} onChange={(date) => (validator.isDate(date) ? date : null)} />{' '}
        </div>

        <button
          onClick={(e) => {
            handleClick(e);
          }}
          className="bg-pepe-red text-white px-4 py-2 rounded-md mt-10"
        >
          Submit
        </button>
      </form>
    </Modal>
  );
}
