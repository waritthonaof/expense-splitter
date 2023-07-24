import { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../ui/Button';
import { addExpense } from './expenseSlice';

const CreateExpense = () => {
  const [name, setName] = useState('');
  const [expense, setExpense] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name && expense) return;
    const expnseData = {
      id: new Date().getTime(),
      name,
      expense,
    };

    dispatch(addExpense(expnseData));
    setName('');
    setExpense(0);
  };

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense name"
        className="input my-2 w-full "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount $"
        className="input my-2 w-full "
        value={expense}
        onChange={(e) => setExpense(Number(e.target.value))}
      />

      <div className="text-right mt-2">
        <Button type="primary">New Expense</Button>
      </div>
    </form>
  );
};
export default CreateExpense;
