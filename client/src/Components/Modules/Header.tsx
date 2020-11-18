import { Hello } from 'johnyworldui/lib';
import React from 'react';
import styled from 'styled-components';
import LanguageSelector from '../Actions/LanguageSelector';
import ThemeButton from '../Actions/ThemeButton';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--size__header--height);
  padding: 1rem;
`;

interface Props {
};

const Header: React.FC<Props> = () => {
  return (
    <Container>
      <Hello text='Header' />
      <LanguageSelector />
      <ThemeButton />
    </Container>
  )
}

export default Header;
