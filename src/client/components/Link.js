import React from 'react';

const Link = ({ to, changePage, children }) => (
  <a href={`/#/${to}/`} onClick={
    (e) => {
      changePage(to);
      e.preventDefault();
    }
  }>
    { children }
  </a>
);

export default Link;
