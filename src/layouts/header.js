import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <p className="h5 my-0 me-md-auto fw-normal">
        <Link to="/">Universe Portal</Link>
      </p>
      <nav className="my-2 my-md-0 me-md-3">
        <Link className="p-2 text-dark" to="/sun">
          Sun
        </Link>
        <Link className="p-2 text-dark" to="/milkyway">
          Milky Way
        </Link>
        <Link className="p-2 text-dark" to="/namek">
          Namek
        </Link>
        <Link className="p-2 text-dark" to="/where-have-you-gone">
          Far away...
        </Link>
      </nav>
      <a className="btn btn-outline-primary" href="#">
        Sign up
      </a>
    </header>
  );
}

export default Header;
