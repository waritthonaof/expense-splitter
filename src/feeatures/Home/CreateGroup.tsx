import { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from '../../ui/Button';
import { createGroup } from './groupSlice';

const CreateGroup = () => {
  const [groupName, setGroupName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!groupName) return;
    dispatch(createGroup(groupName));
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your group name:
      </p>

      <input
        type="text"
        placeholder="Your group name"
        className="input mb-8 w-72"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
      />
      <div>
        <Button type="primary">Create Group</Button>
      </div>
    </form>
  );
};
export default CreateGroup;
