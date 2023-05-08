import { CssBaseline, useMediaQuery as muiUseMediaQuery } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useDarkMode } from 'usehooks-ts';

import { PropsWithChildren } from '@/types/app';

const getTheme = (isDarkMode: boolean) => {
  return createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
    typography: {
      fontFamily: ['Arial', 'sans-serif'].join(','),
    },
  });
};

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const { isDarkMode } = useDarkMode();

  return (
    <ThemeProvider theme={getTheme(isDarkMode)}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  );
};

type AppTheme = ReturnType<typeof getTheme>;

export const useMediaQuery = muiUseMediaQuery<AppTheme>;

export const useIsSmallScreen = () =>
  useMediaQuery((theme) => theme.breakpoints.down('md'));
