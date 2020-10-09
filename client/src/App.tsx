import React, { useState } from 'react';
import styled, { DefaultTheme, StyledComponent, ThemeProvider } from 'styled-components';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Languages, languages } from './Locales/i18n';
import GlobalStyles from './Theme/GlobalStyles';
import { defaultTheme, darkTheme } from './Theme/Theme';

interface TextInterface {
  disabled: boolean;
}

const Text:StyledComponent<'p', DefaultTheme, TextInterface, never> = styled.p`
  ${(props: TextInterface) => props.disabled
    ? 'color: lightgray;'
    : 'color: var(--color__primary);'
  };
`;

const themes = {
  default: defaultTheme,
  dark: darkTheme,
};

type Theme = keyof typeof themes;

const keysOfThemes = Object.keys(themes) as Theme[];

function App() {

  const { t, i18n } = useTranslation();
  
  const [ disabled, setDisabled ] = useState(false);
  
  const [ theme, setTheme ] = useState<Theme>('default');

  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Text disabled={disabled} >{t('hello')}</Text>
      <button onClick={() => setDisabled(!disabled)}>Toggle</button>

      { keysOfThemes.map(theme=> (
        <button key={theme} onClick={() => setTheme(theme)}>{theme}</button>
      ))}

      { languages.map(lang=> (
        <button key={lang} onClick={() => handleChangeLanguage(lang)}>{t(`language_${lang}`)}</button>
      ))}
    </ThemeProvider>


    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path='/' render={() => <p>{t('hello')}</p>} />
    //     <Route path='/test' render={() => <p>Test</p>} />
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
