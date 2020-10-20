import React from 'react';
import styled from 'styled-components';
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
      Header
      <ThemeButton />
    </Container>
  )
}

export default Header;
