import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from './rootReducer';
import { User, addUser } from './Slices/users';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
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

  const users = useSelector<ReducerType, User[]>(state=> state.users);
  const dispatch = useDispatch();

  const [ theme, setTheme ] = useState<Theme>('default');
  const [ name, setName ] = useState('');

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  }

  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  }

  const handleAddUser = (e:FormEvent) => {
    e.preventDefault();
    dispatch(addUser({ name } as User));
    setName('');
  }

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      {/* <Text>{t('hello')}</Text> */}


      <form onSubmit={handleAddUser}>
        <input type='text' value={name} onChange={handleChangeName} />
        <button type='submit'>Add User</button>
        {users.map(user=> (
          <div key={user.id}>{user.name}</div>
        ))}
      </form>


      {/* <div>
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
      </BrowserRouter> */}
    </ThemeProvider>

  );
}

export default App;
