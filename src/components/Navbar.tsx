import React from 'react';
import styled from 'styled-components';
import '../pages/Startpage.css';
import './Navbar.css';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";



const FloatBtn = styled.button`
  position: fixed;
  bottom: 1em;
  left: 1em;
  z-index: 10;
  border: 0;
  border-radius: 50%;`;

  const FloatBtn2 = styled(FloatBtn)`
    left: calc(100% - 4em );
    bottom: 3em;`;

const active = {textShadow: "2px 2px 4px #000000" , color: "white"};
const Navbar = ({showNav, hide, loggedin}: any)=> (
  <div>
    <div className={(showNav && loggedin? "show": "hide") + " left-nav-bar"}>

      <NavLink activeStyle={active} className="nav-item txt-md" to="/home"><i className="fas fa-home"></i></NavLink>
      <NavLink activeStyle={active}  className="nav-item txt-md" to="/projects"><i className="fas fa-tasks"></i></NavLink>
            <NavLink activeStyle={active}   className="nav-item txt-md" to="/setting"><i className="fas fa-cog"></i></NavLink>
    </div>
      <FloatBtn onClick={hide}><i className={ showNav? "fa fa-angle-left txt-md" : "fa fa-angle-right txt-md"}></i></FloatBtn>
      <FloatBtn2><a href="mailto:help@finapp.com"><i className="fas fa-question-circle  txt-md"></i></a></FloatBtn2>
  </div>
  );

const Navbar2 = ({}) => (

  <nav>
    <div className="nav-wrapper white ">
      <div className="input-field col s3">
          <input placeholder={"Search Here"} type="text"/>
      </div>
      <div className="navbar-right-content">
        <ul id="nav-mobile" className="right hide-on-med-and-down custom-navbar bold">
          <li><a href="sass.html">Current Projects</a></li>
          <li><a href="badges.html">Past Projects</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>

    </div>
  </nav>
      
);

export {Navbar, Navbar2};
