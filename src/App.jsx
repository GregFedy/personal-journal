import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.scss';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/useLocalStorage';

const mapItems = (items) => {
  if (!items) {
    return [];
  }
  return items.map((el) => {
    return { ...el, date: new Date(el.date) };
  });
};

function App() {
  const [items, setItems] = useLocalStorage('data');
  const addJournalItem = (newJournalItem) => {
    setItems([
      ...mapItems(items),
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
        <JournalList journalItems={mapItems(items)} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addJournalItem} />
      </Body>
    </div>
  );
}

export default App;
