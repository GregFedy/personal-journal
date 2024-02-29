import styles from './CardButton.module.scss';

const CardButton = ({ children, className }) => {
  const cl = className
    ? `${styles['card-button']} ${className}`
    : styles['card-button'];
  return <div className={cl}>{children}</div>;
};

export default CardButton;
