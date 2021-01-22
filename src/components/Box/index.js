import React from 'react';

function Box({ title, children }) {
  return (
    <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 className="display-4">{title}</h1>
      <div className="lead">{children}</div>
    </div>
  );
}

export default Box;
