import React from 'react';
import styled from 'styled-components';
import {Card, Wrapper} from '../style/styled';

const Home = ({userName}:{userName: string})=>
  <Wrapper className="">
      <Card className="bold txt-sm">
      <div className="align-center">Current Projects: 0</div>
      <div className="align-center">Completed Projects: 10</div>
      <div className="align-center">Available Members: <div className="chip">Aayush</div></div>
      <div className="align-center">Average Project/Members: 3.2</div>
      </Card>
  </Wrapper>;

export default Home;
