import {
  TypedUseSelectorHook,
  useDispatch as genericUseDispatch,
  useSelector as genericUseSelector,
} from 'react-redux';

import { AppDispatch, RootState } from '@/app/store';

// These shall be used instead of `useDispatch` and `useSelector` from react-redux.
export const useDispatch = () => genericUseDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = genericUseSelector;
