import { useState, useEffect } from 'react';
export const useLocalStorage = (key) => {
  const [data, setData] = useState();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(key));
    if (data) {
      setData(data);
    }
  }, []);

  const saveData = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, saveData];
};
