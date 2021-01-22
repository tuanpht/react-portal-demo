import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '../../components/Box';
import Modal from '../../components/Modal';

function Sun() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  return (
    <Box title="You are in the Sun?!">
      No surprise!! Too hot...
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setIsOpen(true)}
      >
        Escape
      </button>
      <Modal
        title="Escape?"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={() => {
          setIsOpen(false);
          alert('Go home, you are drunk!');
          history.push('/');
        }}
      >
        <p>Do you want take a shower?</p>
      </Modal>
    </Box>
  );
}

export default Sun;
