import {
  createSlice,
  PayloadAction,
  combineReducers,
} from "@reduxjs/toolkit";

export const initialState1: { a: number; b: string } = { a: 0, b: "" };
export const slice1 = createSlice({
  name: "slice1",
  initialState: initialState1,
  reducers: {
    updateA(state, action: PayloadAction<number>) {
      state.a += action.payload;
    },
    updateB(state, action: PayloadAction<string>) {
      state.b = action.payload;
    }
  }
});

export const initialState2: { c: number; d: number } = { c: 0, d: 0 };
export const slice2 = createSlice({
  name: "slice2",
  initialState: initialState2,
  reducers: {
    updateC(state, action: PayloadAction<number>) {
      state.c += action.payload;
    },
    updateD(state, action: PayloadAction<number>) {
      state.d += action.payload;
    },
    updateCDD(state, action: PayloadAction<number>) {
      state.c += action.payload;
      state.d += action.payload * 2;
    }
  }
});

export const reducer = combineReducers({
  slice1: slice1.reducer,
  slice2: slice2.reducer
});
export type ReducerType = ReturnType<typeof reducer>;