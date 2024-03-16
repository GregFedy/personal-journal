import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import styles from './SelectUser.module.scss';

const SelectUser = () => {
  const { userId, setUserId } = useContext(UserContext);
  const changeUser = (event) => {
    setUserId(event.target.value);
  };
  return (
    <select
      name="user"
      id="user"
      value={userId}
      onChange={changeUser}
      className={styles['select']}
    >
      <option value="1">User 1</option>
      <option value="2">User 2</option>
      <option value="3">User 3</option>
    </select>
  );
};

export default SelectUser;
