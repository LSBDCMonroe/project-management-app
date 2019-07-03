import React from 'react';
import styled from 'styled-components';
import '../pages/Startpage.css';
import './Navbar.css';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";



const FloatBtn = styled.button`
  position: fixed;
  bottom: 0.5em;
  left: 4em;
  z-index: 10;
  border: 0;
  border-radius: 45%;`;

  const FloatBtn2 = styled(FloatBtn)`
    left: calc(100% - 4em );
    bottom: 3em;`;

const active = {textShadow: "2px 2px 4px #000000" , color: "white"};
const SideNavbar = ({showNav, hide, loggedin}: any)=> (
  <div>
    <div className={(showNav && loggedin? "show": "hide") + " left-nav-bar"}>

      <NavLink activeStyle={active} className="nav-item txt-md" to="/home"><i className="fas fa-home"></i></NavLink>
      <NavLink activeStyle={active}  className="nav-item txt-md" to="/projects"><i className="fas fa-tasks"></i></NavLink>
      <NavLink activeStyle={active}  className="nav-item txt-md" to="/team"><i className="fas fa-users"></i></NavLink>
            <NavLink activeStyle={active}   className="nav-item txt-md" to="/setting"><i className="fas fa-cog"></i></NavLink>
    </div>
      <FloatBtn onClick={hide}><i className={ showNav? "fa fa-angle-left txt-md" : "fa fa-angle-right txt-md"}></i></FloatBtn>
      <FloatBtn2><a href="mailto:help@finapp.com"><i className="fas fa-question-circle  txt-md"></i></a></FloatBtn2>
  </div>
  );

const Navbar = ({}) => (

  <div>

  <script src= "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

  <nav className="blue custom-border-radius">
    <div className="nav-wrapper blue">
      <a className="brandd-logo" style={{fontSize:"30pt"}}> LSBDC </a>
      <a data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <div className="navbar-right-content">
        <ul id="nav-mobile" className="right hide-on-med-and-down custom-navbar bold">
          <li><NavLink to="/home">Dashboard</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/team">Team Members</NavLink></li>
          <li><NavLink to="/setting">Settings</NavLink></li>
        </ul>
      </div>
    </div>
  </nav>

<ul className="sidenav" id="mobile-nav">
<li><a href="sass.html">Sass</a></li>
<li><a href="badges.html">Components</a></li>
<li><a href="collapsible.html">Javascript</a></li>
<li><a href="mobile.html">Mobile</a></li>
</ul>

</div>
      
);

export {Navbar,SideNavbar};
