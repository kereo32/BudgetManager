export type User = {
  name: string;
  budget: number;
  expenses: Array<Expense>;
};

export type Expense = {
  name: string;
  amount: number;
  date: Date;
};
