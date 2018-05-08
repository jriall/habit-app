// @flow

import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/profile">Profile</Link>
    </li>
    <li>
      <Link to="/insight">Insight</Link>
    </li>
  </ul>
);

export default Navbar;
