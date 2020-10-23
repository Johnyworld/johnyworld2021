import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { StyledComponent, DefaultTheme } from 'styled-components';
import { ReducerType } from '../../rootReducer';
import { changeTheme, Themes, themes } from '../../Slices/mode';

const Container = styled.div`
`;

interface ThemeButtonInterface {
  selected: boolean;
}

const Button: StyledComponent<'button', DefaultTheme, ThemeButtonInterface, never> = styled.button`
  cursor: pointer;
  ${(props:ThemeButtonInterface)=> props.selected && `
    font-weight: 700;
  `};
`;

const keysOfThemes = Object.keys(themes) as Themes[];

interface Props {
};

const ThemeButton: React.FC<Props> = () => {
  const currentTheme = useSelector<ReducerType, Themes>(state=> state.mode.theme);
  const dispatch = useDispatch();

  return (
    <Container>
      { keysOfThemes.map(theme=> (
        <Button selected={theme === currentTheme} key={theme} onClick={() => dispatch(changeTheme(theme))}>{theme}</Button>
      ))}
    </Container>
  )
}

export default ThemeButton;
