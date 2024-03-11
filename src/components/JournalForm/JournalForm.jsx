import classNames from 'classnames/bind';
import { useEffect, useReducer, useRef } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './JournalForm.module.scss';
import { INITIAL_STATE, formReducer } from './JournalForm.state';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const cx = classNames.bind(styles);

const JournalForm = ({ onSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const { userId } = useContext(UserContext);
  const { isValid, values, isFormReadyToSubmit } = state;

  const titleRef = useRef();
  const dateRef = useRef();
  const textRef = useRef();

  const addJournalItem = (event) => {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const formProps = Object.fromEntries(formData);

    dispatch({ type: 'SUBMIT_FORM', payload: values });
  };

  const onChange = (event) => {
    dispatch({
      type: 'SET_VALUE',
      payload: { [event.target.name]: event.target.value }
    });
  };

  const focusError = (isValid) => {
    switch (true) {
      case !isValid.title:
        titleRef.current.focus();
        break;
      case !isValid.date:
        dateRef.current.focus();
        break;
      case !isValid.text:
        textRef.current.focus();
        break;
    }
  };

  useEffect(() => {
    dispatch({ type: 'SET_VALUE', payload: { userId } });
  }, [userId]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatch({ type: 'CLEAR_FORM' });
    }
  }, [isFormReadyToSubmit, values, onSubmit]);

  useEffect(() => {
    let timerId;

    if (!isValid.date || !isValid.text || !isValid.title) {
      focusError(isValid);
      timerId = setTimeout(() => {
        dispatch({ type: 'RESET_VALIDITY' });
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  return (
    <form className={styles['journal-form']} onSubmit={addJournalItem}>
      <div>
        <Input
          value={values.title}
          onChange={onChange}
          ref={titleRef}
          type="text"
          name="title"
          appearance="title"
          isValid={isValid.title}
        />
      </div>
      <div className={styles['form-row']}>
        <label htmlFor="date" className={styles['form-label']}>
          <img src="/calendar.svg" alt="Calendar icon" />
          <span>Дата</span>
        </label>
        <Input
          value={values.date}
          onChange={onChange}
          ref={dateRef}
          type="date"
          name="date"
          id="date"
          isValid={isValid.date}
        />
      </div>
      <div className={styles['form-row']}>
        <label htmlFor="tag" className={styles['form-label']}>
          <img src="/folder.svg" alt="Folder icon" />
          <span>Метки</span>
        </label>
        <Input value={values.tag} onChange={onChange} type="text" name="tag" />
      </div>
      <textarea
        value={values.text}
        onChange={onChange}
        ref={textRef}
        name="text"
        cols="30"
        rows="10"
        className={cx({
          input: true,
          invalid: !isValid.text
        })}
      />
      <Button text="Сохранить" />
    </form>
  );
};

export default JournalForm;
