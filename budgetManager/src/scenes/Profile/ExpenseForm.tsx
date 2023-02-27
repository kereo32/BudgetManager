import { SyntheticEvent, useContext } from 'react';
import Modal from 'react-modal';
import { UserContext } from '../../context/userContext';

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
    addExpense(expense);
    props.setOpen((prevState) => !prevState);
  };
  return (
    <Modal isOpen={props.isOpen}>
      <form id="expenseform" className="flex flex-col items-center mt-[10%]">
        <label className="text-2xl">Enter your expense name</label>
        <input id="name" name="name" type="text" className="border-2 border-black rounded-md px-2 py-1 mt-2" />
        <label className="text-2xl mt-4">Enter your expense amount</label>
        <input name="amount" type="text" className="border-2 border-black rounded-md px-2 py-1 mt-2" />
        <label className="text-2xl mt-4">Enter your expense date</label>
        <input name="date" type="text" className="border-2 border-black rounded-md px-2 py-1 mt-2" />
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
