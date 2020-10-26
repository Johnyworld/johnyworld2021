import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from './rootReducer';
import { User, addUser } from './Slices/users';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './Theme/GlobalStyles';
import routes from './routes';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Admin from './Components/Pages/Admin';
import Blog from './Components/Pages/Blog';
import Work from './Components/Pages/Work';
import NotFound from './Components/Pages/NotFound';
import Header from './Components/Modules/Header';
import { Themes, themes } from './Slices/mode';
import Helmet from './Utils/Helmet';
import LeftSidebar from './Components/Modules/LeftSidebar';

const Text = styled.p`
  color: var(--color__primary);
`;

function App() {

  const users = useSelector<ReducerType, User[]>(state=> state.users);
  const theme = useSelector<ReducerType, Themes>(state=> state.mode.theme);
  const dispatch = useDispatch();

  const [ name, setName ] = useState('');

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  }

  const handleAddUser = (e:FormEvent) => {
    e.preventDefault();
    dispatch(addUser({ name } as User));
    setName('');
  }

  return (
    <ThemeProvider theme={themes[theme]}>

      <Helmet
        title='헬멧'
        description='테스트'
        keywords='머리, 헬멧, 테스트'
      />
      
      <GlobalStyles />

      <Header />

      <LeftSidebar />
      
      <Test />

      <form onSubmit={handleAddUser}>
        <input type='text' value={name} onChange={handleChangeName} />
        <button type='submit'>Add User</button>
      </form>

      {users.map(user=> (
        <div key={user.id}>{user.name}</div>
      ))}

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

const Test = () => {
  const { t } = useTranslation();
  return (
    <Text>{t('hello')}</Text>
  )
}

export default App;
