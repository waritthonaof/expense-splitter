import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store/store';
import CreateGroup from './CreateGroup';
import Button from '../../ui/Button';
import { reset } from './groupSlice';
import { reset as resetExpense } from '../expense/expenseSlice';
import { reset as userExpense } from '../users/userSlice';

const Home = () => {
  const groupName = useSelector((state: RootState) => state.group.groupName);
  const dispatch = useDispatch();

  const handleCreateNew = () => {
    dispatch(reset());
    dispatch(resetExpense());
    dispatch(userExpense());
  };

  return (
    <div className="mt-10 px-4 text-center sm:my-16">
      <div className="mb-8">
        <h1 className="text-xl text-green-500 font-bold md:text-3xl uppercase">
          Expense Splitter
        </h1>
        <p className="text-gray-500 text-lg font-semibold mt-3">
          Shared expenses and split the costs with your friends.
        </p>
      </div>

      {groupName === '' ? (
        <CreateGroup />
      ) : (
        <Button type="primary" onClick={handleCreateNew}>
          Create new group
        </Button>
      )}
    </div>
  );
};
export default Home;
