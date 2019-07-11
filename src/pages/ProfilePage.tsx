import React from 'react';
import {projects, employees} from '../fakeJson';
import {Wrapper} from '../style/styled';
import { Project } from '../components';
import styled from 'styled-components';

const Div = styled.div`
verticalAlign: top;
display: inline-block;
margin: 1em;
width: 100%;
max-width: 900px;
text-align: left;
background: white;
cursor: pointer;
border-radius: 1em;
overflow: hidden;
box-shadow: 5px 5px 15px 1px gray;`;

const Paragraph = styled.p `
    font-size: 180%;
    margin: 1%;`;


const ProfilePage = ({userName}:{userName: string}) => {

    const url = window.location.href;
    const slash = url.lastIndexOf("/");
    
    function getUser(urlName: any)
    {
        for (let x = 0; x < employees.length; x++)
        {
            if (urlName === employees[x].username)
            {
                return employees[x]
            }
        }

        return -1;
    }
    
    const employee = getUser(url.substring(slash+1));


    if (employee === -1)
    {
        throw new Error("User Not Found");
    }

    const name = employee.firstName + " " + employee.lastName;
    const finishedProj : any = [];
    const currentProj: any = [];

    projects.forEach(proj => {
        if (proj.workers.includes(name))
        {
            if (proj.completedOn == null)
            {
                currentProj.push(proj);
            }
            else
            {
                finishedProj.push(proj);
            };
        };
        
    });


    return (
        <Wrapper style = {{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            <Div>
                <Paragraph>Name: {name}</Paragraph>
                <Paragraph>Email: {employee.email}</Paragraph>
                <Paragraph>Current Projects: {employee.currentProjects}</Paragraph>
                <Paragraph>Completed Projects: {employee.finishedProjects}</Paragraph>
            </Div>

            <div style = {{textAlign: "center"}}>
                <h1>Current Projects: </h1>
                {currentProj.map((proj: any, index: number) => <Project {...proj} key={index}/>)}
            </div>

            <div style = {{textAlign: "center", marginTop: "3em"}}>
                <h1>Finished Projects: </h1>
                {finishedProj.map((proj: any, index: number) => <Project {...proj} key={index}/>)}
            </div>
            
        </Wrapper>
    );
};

export default ProfilePage;