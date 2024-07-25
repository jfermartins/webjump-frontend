import { useState } from "react";

const useStorage = (store: Storage, key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = store.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value: string | ((val: any) => any)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      store.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  const clear = () => {
    store.removeItem(key);
    setStoredValue(initialValue);
  };

  return [storedValue, setValue, clear];
};

export default useStorage;
