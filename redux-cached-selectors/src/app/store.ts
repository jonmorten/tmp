import { configureStore } from "@reduxjs/toolkit";

import {
  name as thingsName,
  reducer as thingsReducer,
} from "../features/things/things.slice";
import {
  name as thangsName,
  reducer as thangsReducer,
} from "../features/thangs/thangs.slice";

export const store = configureStore({
  reducer: {
    [thangsName]: thangsReducer,
    [thingsName]: thingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
