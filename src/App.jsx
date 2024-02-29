import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';

function App() {
  const [journalItems, setJournalItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      setJournalItems(
        data.map((item) => ({
          ...item,
          date: new Date(item.date)
        }))
      );
    }
  }, []);

  const addJournalItem = (newJournalItem) => {
    setJournalItems((prev) => [
      ...prev,
      {
        id: uuidv4(),
        title: newJournalItem.title,
        date: new Date(newJournalItem.date),
        text: newJournalItem.text
      }
    ]);
  };

  return (
    <div className={styles['app']}>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList journalItems={journalItems} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addJournalItem} />
      </Body>
    </div>
  );
}

export default App;
