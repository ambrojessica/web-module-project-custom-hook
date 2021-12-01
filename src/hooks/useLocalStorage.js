import { useState } from "react";

const useLocalStorage = (key, intV) => {

  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));

    } else {
      localStorage.setItem(key, intV);
      return intV;
    }

  });

  const setStoredValue = (v) => {
    window.localStorage.setItem(key, v);
    setValue(v);

  };
  return [value, setStoredValue];
};

export default useLocalStorage;
