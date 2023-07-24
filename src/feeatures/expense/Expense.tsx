import { useSelector } from 'react-redux';
import CreateExpense from './CreateExpense';
import ExpenseItem from './ExpenseItem';
import { RootState } from '../../store/store';

const Expense = () => {
  const expenses = useSelector((state: RootState) => state.expense);

  return (
    <div className="px-3 py-3 grid grid-rows-[auto_auto_1fr] overflow-scroll ns">
      <h2 className="mt-7 text-xl font-semibold">Expense</h2>
      <CreateExpense />

      <div className="overflow-scroll ns">
        <ul className="mt-3 divide-y divide-stone-200 border-b">
          {expenses &&
            expenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                id={expense.id}
                name={expense.name}
                expense={expense.expense}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};
export default Expense;
