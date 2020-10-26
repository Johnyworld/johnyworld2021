import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { languages, Languages } from '../../Locales/i18n';

const Container = styled.div`
`;

interface Props {
};

const LanguageSelector: React.FC<Props> = () => {

  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  }

  return (
    <Container>
      { languages.map(lang=> (
        <button key={lang} onClick={() => handleChangeLanguage(lang)}>{t(`language_${lang}`)}</button>
      ))}
    </Container>
  )
}

export default LanguageSelector;
