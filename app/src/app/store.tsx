import {
  Action,
  PreloadedState,
  ThunkAction,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';

import counterSaga from '@/features/counter/saga';
import {
  actions as counterActions,
  name as counterName,
  reducer as counterReducer,
} from '@/features/counter/slice';
import { PropsWithChildren } from '@/types/app';

function* rootSaga() {
  yield all([counterSaga()]);
}

const actions = {
  ...counterActions,
};

export const reducer = combineReducers({
  [counterName]: counterReducer,
});

export const createStore = (preloadedState?: PreloadedState<RootState>) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export type RootAction = ActionType<typeof actions>;
export type RootState = ReturnType<typeof reducer>;

export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const AppStoreProvider = ({ children }: PropsWithChildren) => (
  <Provider store={createStore()}>{children}</Provider>
);
