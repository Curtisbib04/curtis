import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
function Header() {
  return(
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark nav_bg">
      <div class="container">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link link_bg" to="/">Home</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link link_bg" to="/clubs">Clubs</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link link_bg" to="/people">People</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link link_bg" to="/test">Test</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link link_bg" to="/time">Time</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
