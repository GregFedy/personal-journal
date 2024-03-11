import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <>
      <img className={styles.logo} src="/logo.svg" alt="Logo" />
      <SelectUser />
    </>
  );
};

export default Header;
