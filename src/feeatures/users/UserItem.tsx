import { FC, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../ui/Button';
import { deleteUser } from './userSlice';

type UserItemProps = {
  id: number;
  name: string;
};

const UserItem: FC<UserItemProps> = ({ id, name }) => {
  const dispatch = useDispatch();

  const handleDelete = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(deleteUser(id));
  };

  return (
    <li className="py-3 flex items-center justify-between">
      <p>{name}</p>

      <Button type="round" onClick={handleDelete}>
        Delete
      </Button>
    </li>
  );
};
export default UserItem;
