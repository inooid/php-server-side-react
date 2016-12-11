import React from 'react';

import NavigationItem from 'components/NavigationItem';

const Navigation = ({ currentPage = 'home', changePage }) => {
  const routes = [
    { name: 'Home', url: 'home' },
    { name: 'About', url: 'about-us' },
    { name: 'Contact', url: 'contact' },
  ];
  const navigationItems = routes.map((route, index) => (
    <NavigationItem key={index} to={route.url} currentPage={currentPage} changePage={changePage}>
      { route.name }
    </NavigationItem>
  ));

  return (
    <nav>
      <ul>
        { navigationItems }
      </ul>
    </nav>
  );
};

export default Navigation;
