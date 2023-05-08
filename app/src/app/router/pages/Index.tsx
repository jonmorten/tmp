import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Layout } from '@/features/app/Layout';
import { Counter } from '@/features/counter/Counter';

export const Index = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h1">Index page</Typography>

        <Link to="/one">One</Link>

        <Counter />
      </Container>
    </Layout>
  );
};
