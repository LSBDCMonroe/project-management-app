import React, { useState } from 'react';
//import styled from 'styled-components';
import {Card, Badge, Grid} from '../style/styled';
import { link } from 'fs';

/*
interface Projectt {
  title: string,
  status: string,
  description: string,
  progress: number,
  link: string,
  workers: Array<string>,

} */



const Project =({title, status, description, progress, link, workers, onEdit, startedOn}: any)=> {
  const [progresss, setProgresss] = useState(progress);
  const [editMode, setEditMode] = useState(false);
  const [badgeColor, setBadgeColor] = useState(progress == 100 ? "#DACC61" : "green");


  function checkBadgeColor(prog: any) {
    if (prog >= 100) {
      setBadgeColor("#DACC61");
    } else {
      setBadgeColor("green");
    }
  }



  return(
        <Card>
           <div>
            <span className="txt-md bold">{title}</span>
            <span className="" onClick={()=>setEditMode(!editMode)}>
            <i className={!editMode?"far fa-edit right bold txt-sm":"fa fa-check right bold txt-sm"}></i>
            </span>
           </div>
           <Badge className="align-left" color={badgeColor}>{status}</Badge>
           <div className="progress" style={{height: "1em", marginBottom: 0, borderRadius: ".8em"}}>
              <div className="determinate" style={{width: progresss+"%"}}></div>
           </div>

          {editMode?
            <div>
             <Grid color="3" className="bold">

               <span className="txt-md pointer start" onClick={()=>{
                  setProgresss(progresss - 5);
                  checkBadgeColor(progresss - 5);
                  }}><i className="material-icons">remove</i></span>

               <span className="align-center">{progresss}%</span>

               <span className="txt-md pointer end" onClick={()=> {
                  setProgresss(progresss + 5);
                  checkBadgeColor(progresss + 5);
                }}><i className="material-icons">add</i></span>

             </Grid>
              <input defaultValue={description}/>
              <div className="bold">Link : <input defaultValue={link}/></div>
            </div>:
                  <div>
                    <div className="bold center"><span className="align-center">{progresss}%</span></div>
                     <p>{description}</p>
                     <div className="bold">Link : {link && link.length > 0 ? link: "Unavilable"}</div>
                     <div className="grey-text"><br/>Started on: {startedOn}</div><hr/><br/>
                   </div>
          }
           <div>
            <span className="bold">Working : </span>
            {workers.map((worker: string, index: number)=><Badge key={index}>{worker}</Badge>)}
            {editMode?   <i className="fa fa-plus right red-text txt-sm"></i>: <div></div>}
            </div>
         </Card>);
  }
export default Project;
