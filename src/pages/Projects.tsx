import React from 'react';
import styled from 'styled-components';
import {Project} from '../components';
const Wrapper = styled.div`
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  width: calc(100% - 50px);
  text-align: center;
  padding: .3em 1em;
  margin-left: 50px;
`;

const Btn = styled.button`
   border-radius: 1em;`;

const Projects =({userName}:{userName: string})=>
      <Wrapper className="">
      <div className="container">
        <div className="">Hello, {userName}</div>
        <div className="items-end">
          <Btn className="bt"><i className="material-icons">add</i><span className="txt-sm">Add Projects</span></Btn>
        </div>
<br/>
         <ul className="tabs">
        <li className="tab col s3"><a href="#test1">Current</a></li>
        <li className="tab col s3"><a className="active" href="#test2">Completed</a></li>
        <li className="tab col s3"><a href="#test4">All</a></li>
      </ul>
      <Project />

</div>
      </Wrapper>;

export default Projects;
