import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Languages, languages } from './Locales/i18n';


function App() {

  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  }

  return (
    <div>
      <p>{t('hello')}</p>
      { languages.map(lang=> (
        <button onClick={() => handleChangeLanguage(lang)}>{t(`language_${lang}`)}</button>
      ))}
    </div>


    // <BrowserRouter>
    //   <Switch>
    //     <Route exact path='/' render={() => <p>{t('hello')}</p>} />
    //     <Route path='/test' render={() => <p>Test</p>} />
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
