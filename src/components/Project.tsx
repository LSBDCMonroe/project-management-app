import React, { useState } from 'react';
import styled from 'styled-components';
import {Card, Badge, Grid} from '../style/styled';

const Project =({title, status, description, progress, link, workers, onEdit}: any)=> {
  const [progresss, setProgresss] = useState(progress);
  return(
        <Card>
           <div><span className="txt-md bold">{title}</span>
            <span onClick={onEdit}><i className="far fa-edit right bold"></i></span>
           </div>
           <Badge className="align-left" color="green">{status}</Badge>
           <div className="progress" style={{height: "1em", marginBottom: 0, borderRadius: ".8em"}}>
            <div className="determinate" style={{width: progresss+"%"}}></div>
           </div>
           <Grid color="3" className="bold">
             <span className="txt-md pointer" onClick={()=>setProgresss(progresss - 1)}><i className="material-icons">add</i></span>
             <span className="align-center">{progresss}%</span>
             <span className="txt-md pointer" onClick={()=>setProgresss(progresss + 1)}><i className="material-icons">remove</i></span>
           </Grid >
           <p>{description}</p>
            <div className="bold">Link : {link}</div>
            <br/><hr/>
            <div>
            <span className="bold">Working : </span>
            {workers.map((worker: string, index: number)=><Badge key={index}>{worker}</Badge>)}
            </div>
         </Card>);
  }

export default Project;
