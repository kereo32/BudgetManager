import React, { useContext } from 'react';
import { UserInputForm } from './UserInputForm';
import { UserContext } from '../../context/userContext';

type Props = {};

const Home = (props: Props) => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="flex flex-col gap-16 py-16 w-screen h-screen">
      <div className="flex flex-col mt-[10%] items-center w-full">
        <h1 className="text-4xl text-center">Welcome to {user.name}'s App!</h1>
        <p className="text-center mt-6">This web app helps you to calculate your income and outcome made by Kerem Hacışabanoğlu for practice purposes</p>
      </div>
      <UserInputForm />
    </div>
  );
};

export default Home;
