import React from 'react';

import Link from 'components/Link';

const NavigationItem = ({ to, currentPage, changePage, children }) => (
  <li className={currentPage === to ? 'active' : null}>
    <Link to={to} changePage={changePage}>
      { children }
    </Link>
  </li>
);

export default NavigationItem;
