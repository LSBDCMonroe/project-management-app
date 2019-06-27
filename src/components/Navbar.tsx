import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

const Nav = styled.div`
  top: 0;
  position: fixed;
  z-index: 10;
  height: 100vh;
  display: grid;
  width: 50px;
  grid-template-rows: 1fr 1fr 1fr;
  place-items: center;
  background: dodgerblue;
  transition: 300ms ease-out;
  @media(max-width: 600px){
    top: calc(100% - 50px);
    grid-template-rows: 1fr;
    place-items: end;
    width: 100%;
    place-items: center;
    height: 50px;
    grid-template-columns: 1fr 1fr 1fr;
  }`;

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
const sideNavbar = ({showNav, hide}: {showNav: any, hide: any})=> (
  <div>
    <Nav className={showNav? "show": "hide"}>

      <NavLink activeStyle={active} className="nav-item txt-md" to="/home"><i className="fas fa-home"></i></NavLink>
      <NavLink activeStyle={active}  className="nav-item txt-md" to="/projects"><i className="fas fa-tasks"></i></NavLink>
            <NavLink activeStyle={active}   className="nav-item txt-md" to="/setting"><i className="fas fa-cog"></i></NavLink>
    </Nav>
      <FloatBtn onClick={hide}><i className={ showNav? "fa fa-angle-left txt-md" : "fa fa-angle-right txt-md"}></i></FloatBtn>
      <FloatBtn2><a href="mailto:help@finapp.com"><i className="fas fa-question-circle  txt-md"></i></a></FloatBtn2>
  </div>
  );

const Navbar = () => (
  
  <nav>
  <div className="nav-wrapper black">  
  <a href="https://www.lsbdc.org/" className="brand-logo left logo">LSBDC</a>
  <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><NavLink to="/projects">Current Projects</NavLink></li>
      <li><NavLink to="/#">Past Projects</NavLink></li>
      <li><NavLink to="/#">Team members</NavLink></li>
      <li><NavLink to="/#"><i className="fas fa-user"></i></NavLink></li>
      <li><NavLink to="/Setting"><i className="fas fa-cog directory"></i></NavLink></li>
    </ul>
  </div>
  </nav>

);

export default Navbar;
