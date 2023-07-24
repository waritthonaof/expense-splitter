import { useSelector } from 'react-redux';

import Home from './feeatures/Home/Home';
import Expense from './feeatures/expense/Expense';
import TotalExpense from './feeatures/expense/TotalExpense';
import User from './feeatures/users/User';
import { RootState } from './store/store';

const App = () => {
  const groupName = useSelector((state: RootState) => state.group.groupName);

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      <Home />
      {groupName && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 my-4 container mx-auto md:overflow-scroll ns">
            <User />
            <Expense />
          </div>
          <TotalExpense />
        </>
      )}
    </div>
  );
};

export default App;
