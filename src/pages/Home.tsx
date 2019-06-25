import React from 'react';
import styled from 'styled-components';
import {Header} from '../components';
const Wrapper = styled.div`
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  min-height: 100vh;
  width: calc(100% - 50px);
  text-align: center;
  padding: .3em 1em;
  margin-left: 50px;`;

const Home = ({userName}:{userName: string})=>
  <Wrapper className="">
      <Header userName={userName}/>
    <i className="fas fa-igloo txt-xl"></i>
    <h1>Home</h1>
  </Wrapper>;

export default Home;
