import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Portal from '../Portal';

function Breadcrumbs({ items }) {
  const [breadcrumbNode, setBreadcrumbNode] = useState(null);

  useEffect(() => {
    setBreadcrumbNode(document.getElementById('breadcrumbs-portal'));
  }, []);

  if (!items || !items.length) {
    return null;
  }

  return (
    breadcrumbNode && (
      <Portal container={breadcrumbNode}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            {items.map((item, index) => (
              <Fragment key={index}>
                {item.url ? (
                  <li className="breadcrumb-item">
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                ) : (
                  <li className="breadcrumb-item active" aria-current="page">
                    {item.title}
                  </li>
                )}
              </Fragment>
            ))}
          </ol>
        </nav>
      </Portal>
    )
  );
}

export default Breadcrumbs;
