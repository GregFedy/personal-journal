import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import styles from './JournalForm.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
const INITIAL_STATE = {
  title: true,
  text: true,
  date: true
};

const JournalForm = ({ onSubmit }) => {
  const [isFormValidState, setIsFormValidState] = useState(INITIAL_STATE);

  const addJournalItem = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);

    let isFormValid = true;

    if (!formProps.title?.trim().length) {
      setIsFormValidState((state) => ({ ...state, title: false }));
      isFormValid = false;
    } else {
      setIsFormValidState((state) => ({ ...state, title: true }));
    }

    if (!formProps.text?.trim().length) {
      setIsFormValidState((state) => ({ ...state, text: false }));
      isFormValid = false;
    } else {
      setIsFormValidState((state) => ({ ...state, text: true }));
    }

    if (!formProps.date) {
      setIsFormValidState((state) => ({ ...state, date: false }));
      isFormValid = false;
    } else {
      setIsFormValidState((state) => ({ ...state, date: true }));
    }

    if (!isFormValid) return;

    onSubmit(formProps);
  };

  useEffect(() => {
    let timerId;

    if (
      !isFormValidState.date ||
      !isFormValidState.text ||
      !isFormValidState.title
    ) {
      timerId = setTimeout(() => {
        setIsFormValidState(INITIAL_STATE);
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isFormValidState]);

  return (
    <form className={styles['journal-form']} onSubmit={addJournalItem}>
      <div>
        <input
          type="text"
          name="title"
          className={cx({
            'input-title': true,
            invalid: !isFormValidState.title
          })}
        />
      </div>
      <div className={styles['form-row']}>
        <label htmlFor="date" className={styles['form-label']}>
          <img src="/calendar.svg" alt="Calendar icon" />
          <span>Дата</span>
        </label>
        <input
          type="date"
          name="date"
          id="date"
          className={cx({
            input: true,
            invalid: !isFormValidState.date
          })}
        />
      </div>
      <div className={styles['form-row']}>
        <label htmlFor="tag" className={styles['form-label']}>
          <img src="/folder.svg" alt="Folder icon" />
          <span>Метки</span>
        </label>
        <input
          type="text"
          name="tag"
          className={cx({
            input: true
          })}
        />
      </div>
      <textarea
        name="text"
        cols="30"
        rows="10"
        className={cx({
          input: true,
          invalid: !isFormValidState.text
        })}
      />
      <Button text="Сохранить" />
    </form>
  );
};

export default JournalForm;
