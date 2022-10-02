import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Thang = {
  id: string;
  name: string;
};

export type ThangsSlice = {
  thangs: Record<string, Thang>;
};

const initialState: ThangsSlice = {
  thangs: {},
};

export const name = "thangs";

const thangsSlice = createSlice({
  name,
  initialState,
  reducers: {
    addThangs(state, action: PayloadAction<Thang[]>) {
      action.payload.forEach((thang) => {
        state.thangs[thang.id] = thang;
      });
    },
  },
});

export const { actions, reducer } = thangsSlice;
