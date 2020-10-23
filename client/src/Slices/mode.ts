import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultTheme, darkTheme } from '../Theme/Theme';

export const themes = {
  default: defaultTheme,
  dark: darkTheme,
};

export type Themes = keyof typeof themes;

export interface Mode {
  theme: Themes,
  animation: boolean,
}

export const theme = createSlice({
  name: 'theme',
  initialState: {
    theme: 'default',
    animation: true,
  } as Mode,
  reducers: {
    changeTheme(state, action: PayloadAction<Themes>) {
      return { ...state, theme: action.payload }
    },
  }
})

export const { changeTheme } = theme.actions;
export default theme.reducer;