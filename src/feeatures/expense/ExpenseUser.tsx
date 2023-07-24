import { FC } from 'react';

type ExpeseUserProps = {
  username: string;
  expense: number;
};
const ExpenseUser: FC<ExpeseUserProps> = ({ username, expense }) => {
  return (
    <div className="bg-blue-100 px-2 py-1 text-xs rounded-full">
      {username}: ${Math.floor(expense)}
    </div>
  );
};
export default ExpenseUser;
