import React, { createContext, useEffect, useState } from 'react';
import { Expense, User } from '../global/types';

export const UserContext = createContext({});

const storageUser: User = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user')!)
  : localStorage.setItem(
      'user',
      JSON.stringify({
        name: 'Pepe',
        budget: 0,
        expenses: [],
      })
    );

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<User>(storageUser);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    const budget = user['expenses'][user.expenses.length - 1] ? user.budget - user.expenses[user.expenses.length - 1].amount : user.budget;
    setUser((prevState) => ({ ...prevState, budget }));
  }, [user.expenses]);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
