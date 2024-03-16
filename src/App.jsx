import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.scss';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/useLocalStorage';
import { UserProvider } from './context/UserContext';
import { useState } from 'react';

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
  const [selectedItem, setSelectedItem] = useState(null);
  const addJournalItem = (newJournalItem) => {
    if (!newJournalItem.id) {
      setItems([
        ...mapItems(items),
        {
          ...newJournalItem,
          id: uuidv4(),
          date: new Date(newJournalItem.date)
        }
      ]);
    } else {
      setItems([
        ...mapItems(items).map((item) => {
          if (item.id === newJournalItem.id) {
            return {
              ...newJournalItem
            };
          }
          return item;
        })
      ]);
    }
  };

  const deleteJournalItem = (id) => {
    setItems([...items.filter((el) => el.id !== id)]);
  };

  return (
    <UserProvider>
      <div className={styles['app']}>
        <LeftPanel>
          <Header />
          <JournalAddButton clearForm={() => setSelectedItem(null)} />
          <JournalList
            journalItems={mapItems(items)}
            setItem={setSelectedItem}
          />
        </LeftPanel>
        <Body>
          <JournalForm
            onSubmit={addJournalItem}
            onDelete={deleteJournalItem}
            data={selectedItem}
          />
        </Body>
      </div>
    </UserProvider>
  );
}

export default App;
