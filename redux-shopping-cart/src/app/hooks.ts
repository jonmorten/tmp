import {
  TypedUseSelectorHook,
  useSelector as genericUseSelector,
  useDispatch as genericUseDispatch,
} from "react-redux";

import { RootState, AppDispatch } from "./store";

export const useDispatch = () => genericUseDispatch<AppDispatch>();

export const useSelector: TypedUseSelectorHook<RootState> = genericUseSelector;
