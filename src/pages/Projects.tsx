import React, { useState } from 'react';
import styled from 'styled-components';
import {Project, Modal} from '../components';
import {Wrapper} from '../style/styled';
import {projects} from '../fakeJson';
const Btn = styled.button`
   border-radius: 1em;`;
const color = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

const Projects =({userName}:{userName: string})=>{
  const [modal, setModal] = useState(false);
  return(
    <Wrapper color={color}>
      <div className="container">
        <div className="">Hello, {userName}</div>
        <div className="items-end">
          <Btn className="bt" onClick={()=>setModal(true)}><i className="material-icons">add</i><span className="txt-sm">Add Projects</span></Btn>
        </div><br/>
        <ul className="tabs">
        <li className="tab col s3"><a href="#test1">Current</a></li>
        <li className="tab col s3"><a className="active" href="#test2">Completed</a></li>
        <li className="tab col s3"><a href="#test4">All</a></li>
      </ul>
        {projects.map((i: object, index: number)=><Project {...i} key={index} onEdit={()=>setModal(true)}/>)}
        <Modal show={modal} onClose={()=>setModal(false)}/>
      </div>
      </Wrapper>);
}

export default Projects;
