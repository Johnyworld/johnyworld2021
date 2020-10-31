import baseStyled, { ThemedStyledInterface } from 'styled-components';
import Bright from './Bright';
import Dark from './Dark';
import Common from './Common';

export const defaultTheme = {...Bright, ...Common};
export const darkTheme = {...Dark, ...Common};

export type Theme = typeof defaultTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
