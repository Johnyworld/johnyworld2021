import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  width: 4rem;
  padding: 1rem;
  display: flex;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: gray;
`;

interface Props {
};

const LeftSidebar: React.FC<Props> = () => {
  return (
    <Container>
      Hello LeftSidebar
    </Container>
  )
}

export default LeftSidebar;
