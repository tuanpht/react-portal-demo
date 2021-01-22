import React from 'react';

function Main({ children }) {
  return (
    <>
      <div className="container-fluid">
        <div id="breadcrumbs-portal"></div>
      </div>
      <main className="container">{children}</main>
    </>
  );
}

export default Main;
