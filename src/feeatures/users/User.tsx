import { useSelector } from 'react-redux';

import CreateUser from './CreateUser';
import UserItem from './UserItem';
import { RootState } from '../../store/store';

const User = () => {
  const groupName = useSelector((state: RootState) => state.group.groupName);
  const users = useSelector((state: RootState) => state.user);

  if (!groupName) return null;

  return (
    <div className="px-3 py-3">
      <h2 className="mt-7 text-xl font-semibold">Your group, #{groupName}</h2>
      <CreateUser />
      <ul className="divide-y divide-stone-200 border-b">
        {users &&
          users.map((user) => (
            <UserItem key={user.id} id={user.id} name={user.username} />
          ))}
      </ul>
    </div>
  );
};
export default User;
