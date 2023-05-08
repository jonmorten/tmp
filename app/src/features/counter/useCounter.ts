import { useCallback } from 'react';

import { useDispatch, useSelector } from '@/app/hooks';
import { actions, getCount } from '@/features/counter/slice';

export const useCounter = () => {
  const count = useSelector(getCount);
  const dispatch = useDispatch();

  const increment = useCallback(() => dispatch(actions.increment()), []);

  const incrementByAmountAsync = useCallback(
    (number: number) => dispatch(actions.incrementByAmountAsync(number)),
    []
  );

  return { count, increment, incrementByAmountAsync };
};
