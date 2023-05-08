import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Index } from '@/app/router/pages/Index';
import { NotFound } from '@/app/router/pages/NotFound';
import { One } from '@/app/router/pages/One';
import { Two } from '@/app/router/pages/Two';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/one',
    element: <One />,
  },
  {
    path: '/two',
    element: <Two />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
