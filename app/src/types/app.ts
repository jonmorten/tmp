import React from 'react';

// Helpers
export type EmptyProps = Record<never, never>;

export type PropsWithChildren<Props = EmptyProps> =
  React.PropsWithChildren<Props>;
