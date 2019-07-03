import React, { useState } from 'react';
import styled from 'styled-components';
import {Card, Badge, Grid} from '../style/styled';

const Paragraph = styled.p `
    font-size: 180%;
    margin: 1%;
`



const TeamMember = ({firstName, lastName, email, currentProjects, finishedProjects, username}: any) => {
    return(
        <div style={{padding: "1% 10% 1% 10%"}} id={username}>
            <Paragraph >Name: {firstName}</Paragraph>
            <Paragraph >Email: {email}</Paragraph>
            <Paragraph >Current Projects: {currentProjects}</Paragraph>
            <Paragraph >Finished Projects: {finishedProjects}</Paragraph>
        </div>
    );
}

export default TeamMember;