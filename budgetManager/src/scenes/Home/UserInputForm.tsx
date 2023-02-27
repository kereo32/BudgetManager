import React, { useEffect, useState } from 'react';
import { UserContext } from '../../context/userContext';
import { Link } from 'react-router-dom';
import validator from 'validator';

export function UserInputForm() {
  const { user, setUser } = React.useContext(UserContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmitted((prevState) => !prevState);
    console.log(user);
  };

  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col items-center">
        <label className="text-2xl">Enter your name</label>
        <input
          type="text"
          onChange={(e) => {
            validator.isAlpha(e.target.value) || e.target.value == '' ? setUser({ ...user, name: e.target.value }) : null;
          }}
          value={user.name}
          className="border-2 border-black rounded-md px-2 py-1 mt-2"
        />
        <label className="text-2xl mt-4">Enter your budget</label>
        <input
          onChange={(e) => {
            validator.isNumeric(e.target.value) || e.target.value == '' ? setUser({ ...user, budget: e.target.value }) : null;
          }}
          type="text"
          value={user.budget}
          className="border-2 border-black rounded-md px-2 py-1 mt-2"
        />
        <button
          onClick={(e) => {
            handleSubmit(e);
          }}
          className={`bg-pepe-red text-white px-4 py-2 rounded-md mt-10 ${isSubmitted ? 'hidden' : null}`}
        >
          Submit
        </button>
      </form>
      <Link to="/profile" className={`bg-pepe-red text-white px-4 py-2 rounded-md mt-10 ${isSubmitted ? null : 'hidden'}`}>
        Go to Profile
      </Link>
    </div>
  );
}
