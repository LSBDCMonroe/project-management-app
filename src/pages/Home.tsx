import React from 'react';
import styled from 'styled-components';
import {Footer} from '../components';
import {Navbar} from '../components';
import {Card, Badge} from '../style/styled';

const Wrapper = styled.div`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
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
      <Navbar/>
      <div style={{minHeight: "100vh"}}>
      <Card className="bold txt-sm">
      <div className="align-center">Current Projects: 0</div>
      <div className="align-center">Completed Projects: 10</div>
      <div className="align-center">Available Members: <div className="chip">Aayush</div></div>
      <div className="align-center">Average Project/Members: 3.2</div>
      </Card>
      </div>
      <Footer/>
  </Wrapper>;

export default Home;
