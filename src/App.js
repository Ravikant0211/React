import React from 'react';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'new TV', amount: 24.67, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Toilet Paper',
      amount: 45.71,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 234,
      date: new Date(2022, 5, 12),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h3', {}, "Let's get started!"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );

  return (
    <div>
      <h3>Let's get started!</h3>
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
