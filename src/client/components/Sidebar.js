import React from 'react';

const Sidebar = (changePage) => (
  <aside>
    <section>
      <h3>About me</h3>
      <p>Lorem ipsum</p>
      <p><button onClick={() => changePage('about')}>Read more</button></p>
    </section>
  </aside>
);

export default Sidebar;
