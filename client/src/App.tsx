import React, { useReducer, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Reducer } from "@reduxjs/toolkit";
import { reducer, ReducerType, initialState1, initialState2, slice1 } from './rootReducer';
import { useTranslation } from 'react-i18next';
import styled, { ThemeProvider } from 'styled-components';
import { Languages, languages } from './Locales/i18n';
import GlobalStyles from './Theme/GlobalStyles';
import { defaultTheme, darkTheme } from './Theme/Theme';
import routes from './routes';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Admin from './Components/Pages/Admin';
import Blog from './Components/Pages/Blog';
import Work from './Components/Pages/Work';
import NotFound from './Components/Pages/NotFound';

const Text = styled.p`
  color: var(--color__primary);
`;

const themes = {
  default: defaultTheme,
  dark: darkTheme,
};

type Theme = keyof typeof themes;

const keysOfThemes = Object.keys(themes) as Theme[];

function App() {

  const { t, i18n } = useTranslation();

  const [state, dispatch] = useReducer<Reducer<ReducerType>>(reducer, {
    slice1: initialState1,
    slice2: initialState2
  });;

  console.log('========== App', state.slice1 );

  const [ theme, setTheme ] = useState<Theme>('default');

  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Text>{t('hello')}</Text>

      <button
        onClick={() => {
          dispatch(slice1.actions.updateA(1));
        }}
      >
        Click me to update A
      </button>

      <div>
        { keysOfThemes.map(theme=> (
          <button key={theme} onClick={() => setTheme(theme)}>{theme}</button>
        ))}
      </div>

      <div>
        { languages.map(lang=> (
          <button key={lang} onClick={() => handleChangeLanguage(lang)}>{t(`language_${lang}`)}</button>
        ))}
      </div>

      <BrowserRouter>
        <div>
          <Link to={routes.home}>
            <button>Home</button>
          </Link>
          <Link to={routes.blog}>
            <button>Blog</button>
          </Link>
          <Link to={routes.work}>
            <button>Work</button>
          </Link>
          <Link to={routes.about}>
            <button>About</button>
          </Link>
        </div>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.blog} component={Blog} />
          <Route path={routes.work} component={Work} />
          <Route path={routes.about} component={About} />
          <Route path={routes.admin} component={Admin} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
