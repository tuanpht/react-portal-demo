import React from 'react';
import { Link } from 'react-router-dom';
import Box from '../../components/Box';
import Breadcrumbs from '../../components/Breadcrumbs';

function NotFound() {
  return (
    <>
      <Box title="You've gone too far">
        It is too far... But you can go home any time by Portal. Do you want? -{' '}
        <Link to="/">Portal here</Link>
      </Box>
      <Breadcrumbs
        items={[
          { url: '/this', title: 'this' },
          { url: '/does', title: 'does' },
          { url: '/not', title: 'not' },
          { title: 'exist' },
        ]}
      />
    </>
  );
}

export default NotFound;
