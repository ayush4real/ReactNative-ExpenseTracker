import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2022-04-20"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 80.0,
    date: new Date("2022-03-17"),
  },
  {
    id: "e3",
    description: "Wrist watch",
    amount: 22.99,
    date: new Date("2022-04-06"),
  },
  {
    id: "e4",
    description: "Book",
    amount: 14.99,
    date: new Date("2022-04-08"),
  },
  {
    id: "e5",
    description: "Mouse",
    amount: 6.25,
    date: new Date("2022-04-02"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  if (action.type === "ADD") {
    const id = new Date().toString() + Math.random().toString();
    return [{ ...action.payload, id: id }, ...state];
  }
  if (action.type === "UPDATE") {
    const updatableExpenseIndex = state.findIndex(
      (item) => item.id === action.payload.id
    );
    const updatableExpense = state[updatableExpenseIndex];
    const updatedItem = { ...updatableExpense, ...action.payload.data };
    const updatedExpenses = [...state];
    updatedExpenses[updatableExpenseIndex] = updatedItem;
    return updatedExpenses;
  }
  if (action.type === "DELETE") {
    return state.filter((item) => item.id !== action.payload);
  }

  return state;
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  }

  return (
    <ExpensesContext.Provider
      value={value}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
