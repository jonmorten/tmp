import CheckIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { Box, Typography } from '@mui/material';

import { useCounter } from '@/features/counter/useCounter';

export const StatusBar = () => {
  const { count } = useCounter();

  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        gap: theme.spacing(10),
        justifyContent: 'center',
        paddingBlock: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <CheckIcon />

        <Typography>All OK</Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
        <CheckIcon />

        <Typography>Current count: {count}</Typography>
      </Box>
    </Box>
  );
};
