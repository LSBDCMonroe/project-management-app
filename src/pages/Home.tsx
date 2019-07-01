import React from 'react';
import styled from 'styled-components';
import {Footer} from '../components';
import {Navbar,Dashboard} from '../components';



const Wrapper = styled.div`
  //background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  min-height: 100vh;
  width: 100%;
  text-align: center;
  padding: .3em 1em;
  padding-left: 55px;
  @media(max-width: 600px){
  width: 100%;
  padding-left: 1em;}
  `;

const Home = ({userName}:{userName: string})=>
  <Wrapper className="">
      <Dashboard/>
      <Footer/>
  </Wrapper>;

export default Home;
