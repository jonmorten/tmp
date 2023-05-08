import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Counter } from '@/features/counter/Counter';

const mockIncrement = vi.fn();
const mockIncrementByAmountAsync = vi.fn();

vi.mock('@/features/counter/useCounter', () => ({
  useCounter: () => ({
    count: 0,
    increment: mockIncrement,
    incrementByAmountAsync: mockIncrementByAmountAsync,
  }),
}));

describe('Counter', () => {
  it('renders', () => {
    const { getByText } = render(<Counter />);

    fireEvent.click(getByText('Increment'));
    expect(mockIncrement).toHaveBeenCalledOnce();

    fireEvent.click(getByText('Increment async'));
    expect(mockIncrementByAmountAsync).toHaveBeenCalledOnce();
  });
});
