import CardButton from '../CardButton/CardButton';
import styles from './JournalAddButton.module.scss';

const JournalAddButton = () => {
  return (
    <CardButton className={styles['journal-add']}>
      <img className={styles.plus} src="/plus.svg" alt="Plus" />
      Новое воспоминание
    </CardButton>
  );
};

export default JournalAddButton;
