import styles from './JournalItem.module.scss';

const JournalItem = ({ title, date, text }) => {
  const formatedDate = new Intl.DateTimeFormat('ru-RU', {
    dateStyle: 'short'
  }).format(date);

  return (
    <>
      <h2 className={styles['journal-item__title']}>{title}</h2>
      <div className={styles['journal-item__body']}>
        <div className={styles['journal-item__date']}>{formatedDate}</div>
        <p className={styles['journal-item__text']}>{text}</p>
      </div>
    </>
  );
};

export default JournalItem;
