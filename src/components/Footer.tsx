import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { style } from '@material-ui/system';
import styled from 'styled-components';

const ListItem = styled.li`
display: inline;
padding-right: 5%;
font-family: 'Fugaz One', cursive;
font-size: 15pt;
`;

const Bottom = styled.footer`
position:relative;
bottom:0;
left:0;
height: 20%;
background-color:blue;
`;

const Footer = ({}) => 

<Bottom className="page-footer">
<div className="container">
  <div className="row">
    <div className="col l6 s12" >
      <h5 style={{textAlign:"center"}}>LSBDC project management app </h5>
      <br/>
    <ul style={{listStyleType:"none", textAlign:"center"}}>
                  <ListItem>
                    <NavLink className="grey-text text-lighten-3" to="/home">Dashboard</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink className="grey-text text-lighten-3" to="/projects">Projects</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink className="grey-text text-lighten-3" to="/team">Team Members</NavLink>
                  </ListItem>
                  <ListItem>
                    <NavLink className="grey-text text-lighten-3" to="/setting">Settings</NavLink>
                  </ListItem>
                </ul>
    </div>
  </div>
</div>
<div className="footer-copyright">
  <div>
  </div>
  <div className="container">
  Copyright © {new Date().getFullYear()}
  <a className="grey-text text-lighten-4 right" href="https://www.lsbdc.org" target="_blank">www.lsbdc.org</a>
  </div>
</div>
</Bottom>;

export default Footer;