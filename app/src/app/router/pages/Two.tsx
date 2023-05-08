import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Layout } from '@/features/app/Layout';

export const Two = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h1">Page two</Typography>

        <Link to="/asdf">Not found</Link>
      </Container>
    </Layout>
  );
};
