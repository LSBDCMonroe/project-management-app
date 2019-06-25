import React from 'react';
import styled from 'styled-components';

const Badge = styled.div`
  color: white;
  background: dodgerblue;
  display: inline-block;
  padding: 0.3em;
  font-size: 1.2em,
  display: inline-block,
  margin: 0.4em;
  border-radius: .4em;
  max-width: 10em;
  text-align: center;
  font-weight: bolder
  background: ${props => props.color};
  `;

  const Card = styled.div`
  border-top: 1px solid #2B547E;
   margin: 1em 0.5em;
   padding: .8em 1em;
   background: white;
   box-shadow: 0 .25em .5em rgba(0,0,0,.5);
   border-radius: .5em;
  `;

const Project =()=>
        <Card>
           <div><span className="txt-md bold">Project Name</span>
            <span><i className="far fa-edit right"></i></span>
           </div>
           <Badge className="align-left" color="green">Testing</Badge>
           <div className="progress" style={{height: "1em", marginBottom: 0, borderRadius: ".8em"}}>
            <div className="determinate" style={{width: "70%"}}></div>
           </div>
           <div className="bold center">70%</div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempiquip ex ea commodo consequat.
            Dutate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="bold">Link : aayushh.com</div>
            <br/><hr/>
            <div>
            <span className="bold">Working :</span> <Badge>Aayush Shrestha</Badge>
              </div>
         </Card>;

export default Project;
