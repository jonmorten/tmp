import React from 'react';
import ReactDOM from 'react-dom/client';

import { enableApiMock } from '@/app/env';
import { AppRouter } from '@/app/router';
import { AppStoreProvider } from '@/app/store';
import { AppThemeProvider } from '@/app/theme';

if (enableApiMock) {
  const { worker } = await import('@/app/mocks/browser');
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppStoreProvider>
      <AppThemeProvider>
        <AppRouter />
      </AppThemeProvider>
    </AppStoreProvider>
  </React.StrictMode>
);
