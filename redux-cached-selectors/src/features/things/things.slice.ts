import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Thing = {
  id: string;
  name: string;
};

export type ThingsSlice = {
  things: Record<string, Thing>;
};

const initialState: ThingsSlice = {
  things: {},
};

export const name = "things";

const thingsSlice = createSlice({
  name,
  initialState,
  reducers: {
    addThings(state, action: PayloadAction<Thing[]>) {
      action.payload.forEach((thing) => {
        state.things[thing.id] = thing;
      });
    },
  },
});

export const { actions, reducer } = thingsSlice;
