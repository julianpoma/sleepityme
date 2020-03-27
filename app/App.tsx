/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Error } from './components';
import Navigator from './navigator';
import { ThemeContext } from './providers/ThemeProvider';
import { AsyncStorage } from 'react-native';

const App: React.FC<{}> = () => {
  const [themeState, setThemeState] = useState({
    hasThemeMounted: false,
    theme: 'light',
  });

  // We pass the [] so the useEffect is only executed on the first rendering
  useEffect(() => {
    AsyncStorage.getItem('theme').then(value => {
      return setThemeState({
        ...themeState,
        hasThemeMounted: true,
        theme: value,
      });
    });
  }, []);

  // Avoid rendering the app until the theme has been mounted
  if (!themeState.hasThemeMounted) {
    return null;
  }

  const toggle = () => {
    const theme = themeState.theme === 'light' ? 'dark' : 'light';
    AsyncStorage.setItem('theme', theme);
    setThemeState({ ...themeState, theme: theme });
  };

  const computedContext = {
    theme: themeState.theme,
    toggleTheme: toggle,
  };

  return (
    <Error.Boundary>
      <ThemeContext.Provider value={computedContext}>
        <Navigator />
      </ThemeContext.Provider>
    </Error.Boundary>
  );
};

export default App;
