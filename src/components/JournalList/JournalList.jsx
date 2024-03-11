import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import styles from './JournalList.module.scss';

const JournalList = ({ journalItems }) => {
  const { userId } = useContext(UserContext);
  const sortJournalItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  };
  if (journalItems.length === 0) {
    return <p className={styles['journal-list__empty']}>Журнал пуст.</p>;
  }
  return (
    <>
      {journalItems
        .filter((el) => el.userId === userId)
        .sort(sortJournalItems)
        .map((el) => (
          <CardButton key={el.id}>
            <JournalItem title={el.title} date={el.date} text={el.text} />
          </CardButton>
        ))}
    </>
  );
};

export default JournalList;
