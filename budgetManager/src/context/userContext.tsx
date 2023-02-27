import React, { createContext, useEffect, useState } from 'react';
import { Expense, User } from '../global/types';

const defaultUser = {
  name: 'pepe',
  budget: 0,
  expenses: [],
};

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storageUser = localStorage.getItem('user');
    if (storageUser) {
      return JSON.parse(storageUser);
    } else {
      localStorage.setItem('user', JSON.stringify(defaultUser));
      return defaultUser;
    }
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const addExpense = (newExpense) => {
    const updatedExpenses = [...user.expenses, newExpense];
    const updatedBudget = user.budget - newExpense.amount;
    setUser((prevState) => ({
      ...prevState,
      expenses: updatedExpenses,
      budget: updatedBudget,
    }));
  };

  return <UserContext.Provider value={{ user, setUser, addExpense }}>{children}</UserContext.Provider>;
};
