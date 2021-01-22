import React from 'react';
import { Link } from 'react-router-dom';
import Box from '../../components/Box';

function NotFound() {
  return (
    <Box title="You've gone too far">
      It is too far... But you can go home any time by Portal. Do you want? - <Link to="/">Portal here</Link>
    </Box>
  );
}

export default NotFound;
