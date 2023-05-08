import { rest } from 'msw';

import { apiUrl } from '@/app/env';

const url = (path: string) => `${apiUrl}/${path}`;

export const handlers = [
  rest.get(url('ping'), (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: 'pong' }));
  }),

  rest.get(url('posts'), (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          title: 'Post 1',
        },
        {
          id: '2',
          title: 'Post 2',
        },
        {
          id: '3',
          title: 'Post 3',
        },
      ])
    );
  }),
];
