import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { Layout } from '@/features/app/Layout';

export const NotFound = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h1">404: Not Found</Typography>

        <Link to="/">Index page</Link>
      </Container>
    </Layout>
  );
};
