import React from 'react';
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './Hooks/usePersistedState';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Content />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
