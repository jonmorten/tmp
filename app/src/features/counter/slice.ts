import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/app/store';

export type SliceState = {
  value: number;
  status: 'idle' | 'loading';
};

const initialState: SliceState = {
  value: 0,
  status: 'idle',
};

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    incrementByAmountAsync: (state, _action: PayloadAction<number>) => {
      state.status = 'loading';
    },
    incrementByAmountAsyncSuccess(state, action: PayloadAction<number>) {
      state.value += action.payload;
      state.status = 'idle';
    },
    incrementByAmountAsyncFailed(state) {
      state.status = 'idle';
    },
  },
});

export const getCount = (state: RootState) => state[slice.name].value;

export const { actions, name, reducer } = slice;
