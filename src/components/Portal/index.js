import { useMemo } from 'react';
import { createPortal } from 'react-dom';

function Portal({ children, container }) {
  const target = useMemo(
    () =>
      container instanceof HTMLElement
        ? container
        : document.getElementById('root'),
    [container]
  );

  return createPortal(children, target);
}

export default Portal;
