import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Layout } from '@/features/app/Layout';

export const One = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h1">Page one</Typography>

        <Link to="/two">Two</Link>
      </Container>
    </Layout>
  );
};
