import React from 'react';
import '../pages/Startpage.css';

const Header = ({userName}: {userName: string}) =>
<nav>
<div className="nav-wrapper">  <ul id="nav-mobile" className="right hide-on-med-and-down">
    <li><a href="sass.html">Home</a></li>
    <li><a href="badges.html">About</a></li>
    <li><a href="collapsible.html">Resources</a></li>
  </ul>
  Hello, {userName}
</div>
</nav>;

export default Header;
