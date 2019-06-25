import React, { useState } from 'react';
import styled from 'styled-components';
import {Project, Modal} from '../components';
const Wrapper = styled.div`
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  width: 100%;
  text-align: center;
  padding: .3em 1em;
  padding-left: 55px;
  @media(max-width: 600px){
  width: 100%;
    padding-left: 1em;}
`;

const obj = [{
  title: "Cool Project",
  status: "Testing",
  progress: 90,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempiquip ex ea commodo consequat. Dutate velit esse cillum dolore eu fugiat nulla pariatur.",
  workers: ["Aayush Shrestha"],
  link: "aayushh.com",
  startedOn: "2019",
  completedOn: null
},
{
  title: "Cool Project",
  status: "Testing",
  progress: 90,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempiquip ex ea commodo consequat. Dutate velit esse cillum dolore eu fugiat nulla pariatur.",
  workers: ["Aayush Shrestha"],
  link: "aayushh.com",
  startedOn: "2019",
  completedOn: null
}
];
const Btn = styled.button`
   border-radius: 1em;`;

const Projects =({userName}:{userName: string})=>{
  const [modal, setModal] = useState(false);
  return(    <Wrapper className="">
      <div className="container">
        <div className="">Hello, {userName}</div>
        <div className="items-end">
          <Btn className="bt" onClick={()=>setModal(true)}><i className="material-icons">add</i><span className="txt-sm">Add Projects</span></Btn>
        </div>
<br/>
         <ul className="tabs">
        <li className="tab col s3"><a href="#test1">Current</a></li>
        <li className="tab col s3"><a className="active" href="#test2">Completed</a></li>
        <li className="tab col s3"><a href="#test4">All</a></li>
      </ul>

      {obj.map((i: object, index: number)=><Project {...i} key={index} onEdit={()=>setModal(true)}/>)}
   <Modal show={modal} onClose={()=>setModal(false)}/>
</div>
      </Wrapper>);
}

export default Projects;
