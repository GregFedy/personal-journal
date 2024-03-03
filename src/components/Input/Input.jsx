import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

const Input = forwardRef(function Input(
  { value, onChange, isValid = true, appearance, ...props },
  ref
) {
  const className = cx({
    ['input']: true,
    ['input-title']: appearance === 'title',
    ['invalid']: !isValid
  });

  return (
    <input
      {...props}
      value={value}
      onChange={onChange}
      ref={ref}
      className={className}
    />
  );
});

export default Input;
