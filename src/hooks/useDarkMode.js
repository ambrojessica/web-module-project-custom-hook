import useLocalStorage from './useLocalStorage';

const useDarkMode = (intV) => {
  const [darkMode, setDarkMode] = useLocalStorage("dark mode", intV);

  return [darkMode, setDarkMode];
};

export default useDarkMode;