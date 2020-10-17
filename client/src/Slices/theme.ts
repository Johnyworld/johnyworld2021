import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultTheme, darkTheme } from '../Theme/Theme';

export const themes = {
  default: defaultTheme,
  dark: darkTheme,
};

export type Themes = keyof typeof themes;

export const theme = createSlice({
  name: 'theme',
  initialState: 'default' as Themes,
  reducers: {
    changeTheme(state, action: PayloadAction<Themes>) {
      return action.payload
    },
  }
})

export const { changeTheme } = theme.actions;
export default theme.reducer;