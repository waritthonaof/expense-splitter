import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';

const TotalExpense = () => {
  const expenses = useSelector((state: RootState) => state.expense);
  const users = useSelector((state: RootState) => state.user);

  if (!expenses && users) return;

  const totalExpense = expenses.reduce((acc, cur) => acc + cur.expense, 0);
  const expensePerUser = totalExpense / users.length;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{expenses.length} Expense</span>
        <span>${totalExpense}</span>
      </p>
      <p>${expensePerUser} Per user</p>
    </div>
  );
};
export default TotalExpense;
