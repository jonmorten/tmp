import { put, takeLatest } from 'redux-saga/effects';

import { actions } from '@/features/counter/slice';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* incrementByAmountAsync(
  action: ReturnType<typeof actions.incrementByAmountAsync>
) {
  try {
    yield delay(2000);
    yield put(actions.incrementByAmountAsyncSuccess(action.payload));
  } catch (_error) {
    yield put(actions.incrementByAmountAsyncFailed());
  }
}

export default function* counterSaga() {
  yield takeLatest(actions.incrementByAmountAsync.type, incrementByAmountAsync);
}
