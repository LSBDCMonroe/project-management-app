import React, { useState } from 'react';
import styled from 'styled-components';
import {Card, Badge, Grid} from '../style/styled';
import { relative } from 'path';

const Paragraph = styled.p `
    font-size: 180%;
    margin: 1%;
`



const TeamMember = ({firstName, lastName, email, currentProjects, finishedProjects, username}: any) => {
    return(
        <Card style={{padding: "1% 10% 1% 10%",overflow: "hidden"}} id={username}>
            <Paragraph style={{float: "left"}}>{firstName}</Paragraph>
            <Paragraph style={{float: "right"}}>{email}</Paragraph>
            <Paragraph style={{float: "left", clear: "left"}}>Current Projects: {currentProjects}</Paragraph>
            <Paragraph style={{float: "right", clear: "right"}}>Finished Projects: {finishedProjects}</Paragraph>
        </Card>
    );
}

export default TeamMember;