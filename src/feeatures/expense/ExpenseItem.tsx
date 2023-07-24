import { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../ui/Button';
import ExpenseUser from './ExpenseUser';
import { RootState } from '../../store/store';
import { deleteExpense } from './expenseSlice';

type ExpeseItemProps = {
  id: number;
  name: string;
  expense: number;
};

const ExpenseItem: FC<ExpeseItemProps> = ({ id, name, expense }) => {
  const users = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const expensePerUser = expense / users.length;

  const handleDeleteExpense = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(deleteExpense(id));
  };

  return (
    <li className="py-3">
      <div className="flex items-center justify-between">
        <p className="font-semibold">
          {name}, <span>${expense}</span>
        </p>
        <Button type="round" onClick={handleDeleteExpense}>
          -
        </Button>
      </div>
      <div className="ml-2 mt-2 flex flex-wrap items-center gap-2">
        {users &&
          users.map((user) => (
            <ExpenseUser
              key={user.id}
              username={user.username}
              expense={expensePerUser}
            />
          ))}
      </div>
    </li>
  );
};
export default ExpenseItem;
