import styles from './Button.module.scss';

const Button = ({ children }) => {
  return (
    <button className={`${styles.button} ${styles.accent}`}>{children}</button>
  );
};

export default Button;
