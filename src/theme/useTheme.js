import { useEffect, useState } from 'react';
import * as themes from '../theme/schema.json';
import { setToLS , getFromLS } from '../utils/storage';

export const useTheme = () => {
  const defaultTheme = getFromLS('themeMode') || 'dark';  
  const [themeMode, setThemeMode ] = useState(defaultTheme);
  const [theme, setTheme] = useState(themes.data[themeMode]);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = mode => {
    setThemeMode(mode);
    setToLS('themeMode',mode)
  };


  useEffect(() =>{
    setTheme(themes.data[themeMode]);
    setThemeLoaded(true);
  }, [themeMode]);


  return { theme, themeLoaded, setMode , themeMode };
};