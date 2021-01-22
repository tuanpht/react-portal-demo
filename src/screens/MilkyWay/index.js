import React from 'react';
import Box from '../../components/Box';
import Breadcrumbs from '../../components/Breadcrumbs';

function MilkyWay() {
  return (
    <>
      <Box title="You are in the Milky Way!">Let enjoy your journey...</Box>
      <Breadcrumbs items={[{ title: 'Sometimes, Portal will appear here!' }]} />
    </>
  );
}

export default MilkyWay;
