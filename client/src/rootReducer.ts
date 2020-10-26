import { combineReducers } from "@reduxjs/toolkit";
import users from './Slices/users';
import mode from './Slices/mode';

const reducer = combineReducers({
  users, mode,
});

export type ReducerType = ReturnType<typeof reducer>;
export default reducer;
