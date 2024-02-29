import styles from './Button.module.scss';

const Button = ({ text }) => {
  return (
    <button className={`${styles.button} ${styles.accent}`}>{text}</button>
  );
};

export default Button;
