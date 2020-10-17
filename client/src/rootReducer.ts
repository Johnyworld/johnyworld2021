import { combineReducers } from "@reduxjs/toolkit";
import users from './Slices/users';
import theme from './Slices/theme';

const reducer = combineReducers({
  users, theme,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
