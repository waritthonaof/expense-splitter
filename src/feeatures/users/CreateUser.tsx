import { useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../ui/Button';
import { addUser } from './userSlice';

const CreateUser = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username) return;

    const user = {
      id: new Date().getTime(),
      username,
      expense: 0,
    };

    dispatch(addUser(user));
    setUsername('');
  };

  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add your friend"
        className="input my-4 w-72 mr-3"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Button type="primary">Add</Button>
    </form>
  );
};
export default CreateUser;
