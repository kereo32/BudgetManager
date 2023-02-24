import { useState, useContext } from 'react';
import ActionLink from './ActionLink';
import { UserContext } from '../../context/userContext';

type Props = {};

const Navbar = ({}: Props) => {
  const { user } = useContext(UserContext);
  return (
    <nav className="flex bg-pepe-red fixed top-0 z-30 w-full h-16">
      <div className="flex items-center ml-2 gap-10 w-full">
        <div className="flex flex-1 justify-center">
          <h1 className="text-white text-2xl">{user.name}'s Budget Calculator</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
