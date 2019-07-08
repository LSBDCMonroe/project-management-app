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
        <div className="items-end">
          <Btn className="bt fixed-button" onClick={()=>setModal(true)}>
            <i className="material-icons">add</i><span className="txt-sm">Add Project</span>
          </Btn>
        </div>
        <br/>
        {projects.map((i: object, index: number)=><Project {...i} key={index} onEdit={()=>setModal(true)}/>)}
        <Modal show={modal} onClose={()=>setModal(false)}/>
      </div>
      </Wrapper>);
}

export default Projects;
