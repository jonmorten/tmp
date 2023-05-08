import { Box, Button, ButtonGroup, Typography } from '@mui/material';

import { useCounter } from '@/features/counter/useCounter';

export const Counter = () => {
  const { count, increment, incrementByAmountAsync } = useCounter();

  return (
    <Box>
      <Typography>The count is {count}</Typography>

      <ButtonGroup variant="contained">
        <Button
          onClick={() => {
            increment();
          }}
        >
          Increment
        </Button>

        <Button
          onClick={() => {
            incrementByAmountAsync(2);
          }}
        >
          Increment async
        </Button>
      </ButtonGroup>
    </Box>
  );
};
