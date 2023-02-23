import { useState } from 'react';

type Props = {};

const Navbar = ({}: Props) => {
  return (
    <nav className={`flex bg-pepe-red fixed top-0 z-30 w-full h-16`}>
      <div className="flex items-center ml-2 gap-10 w-full">
      <a href="/">Home</a>
      <a href="/profile">Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
