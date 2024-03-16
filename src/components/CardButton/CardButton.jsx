import styles from './CardButton.module.scss';

const CardButton = ({ children, className, ...props }) => {
  const cl = className
    ? `${styles['card-button']} ${className}`
    : styles['card-button'];

  return (
    <div className={cl} {...props}>
      {children}
    </div>
  );
};

export default CardButton;
