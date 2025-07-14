import { useCallback, useEffect, useState } from 'react';
import { DEFAULT_THEME, themeMap } from '../../config/theme.config';
import type { ThemeKey } from '../../types';

export function useTheme() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  const getTheme = useCallback(() => {
    const currentTheme =
      (localStorage.getItem('theme') as ThemeKey) ?? DEFAULT_THEME;
    applyTheme(currentTheme);
  }, []);

  const applyTheme = (theme: ThemeKey) => {
    setTheme(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  const handleTheme = () => {
    const newTheme = themeMap[theme].intertedTheme;
    applyTheme(newTheme);
  };

  useEffect(() => {
    getTheme();
  }, [getTheme]);

  return {
    handleTheme,
    currentTheme: themeMap[theme],
  };
}
