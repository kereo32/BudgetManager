import React, { createContext, useState } from 'react';
import { Expense, User } from '../global/types';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState<User>({
    name: 'Pepe',
    budget: 0,
    expenses: [],
  });

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
