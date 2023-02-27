import React, { createContext, useEffect, useState } from 'react';
import { Expense, User } from '../global/types';

const defaultUser = {
  name: 'pepe',
  budget: 0,
  expenses: [],
};

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<User>(() => {
    const storageUser = localStorage.getItem('user');
    return storageUser ? JSON.parse(storageUser) : localStorage.setItem('user', JSON.stringify(defaultUser));
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const addExpense = (newExpense: Expense) => {
    const updatedExpenses = [...user.expenses, newExpense];
    const updatedBudget = user.budget - newExpense.amount > 0 ? user.budget - newExpense.amount : 0;
    setUser((prevState) => ({
      ...prevState,
      expenses: updatedExpenses,
      budget: updatedBudget,
    }));
  };

  return <UserContext.Provider value={{ user, setUser, addExpense }}>{children}</UserContext.Provider>;
};
