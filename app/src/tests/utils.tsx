import { PreloadedState, configureStore } from '@reduxjs/toolkit';
import { RenderOptions, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { AppStore, RootState, reducer } from '@/app/store';
import { AppThemeProvider } from '@/app/theme';
import { PropsWithChildren } from '@/types/app';

type GenericProps = PropsWithChildren<Record<string, unknown>>;

type ExtendedRenderOptions = Omit<RenderOptions, 'queries'> & {
  preloadedState?: PreloadedState<RootState>;
  route?: string;
  store?: AppStore;
};

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {},
    route,
    store = configureStore({ preloadedState, reducer }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: GenericProps) => (
    <Provider store={store}>
      <MemoryRouter initialEntries={route ? [`/${route}`] : undefined}>
        <AppThemeProvider>{children}</AppThemeProvider>
      </MemoryRouter>
    </Provider>
  );

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export const GenericComponent = ({ children }: GenericProps) => <>{children}</>;
