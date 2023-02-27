import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { Expense } from '../../global/types';
import ExpenseCard from './ExpenseCard';
import { ExpenseForm } from './ExpenseForm';
import { SubmitButton } from './SubmitButton';

type Props = {};

const Profile = (props: Props) => {
  const { user, setUser } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const expenses = user.expenses.map((expense: Expense, i: number) => {
    return <ExpenseCard expense={expense} i={i}></ExpenseCard>;
  });

  return (
    <div className="flex flex-col gap-16 py-16 w-screen h-screen mt-10">
      <div className="flex flex-col mt-[5%] items-center w-full">
        <h1 className="text- 4xl text-center">Username : {user.name}</h1>
        <p className="text-center mt-6">User Budget : {user.budget}</p>
      </div>
      <div className="flex flex-row gap-10 justify-center">{expenses}</div>
      <SubmitButton setIsModalOpen={setIsModalOpen}></SubmitButton>
      <ExpenseForm setOpen={setIsModalOpen} isOpen={isModalOpen} />
    </div>
  );
};

export default Profile;
