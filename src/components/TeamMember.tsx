import React, { useState } from 'react';
import styled from 'styled-components';
import {Card, Badge, Grid} from '../style/styled';

const TeamMember = ({firstName, lastName, email, currentProjects, finishedProjects, username}: any) => {
    return(
        <Card>
            <p>{firstName}</p>
            <p>{email}</p>
            <p>Current Projects: {currentProjects}</p>
            <p>Finished Projects: {finishedProjects}</p>
        </Card>
    );
}

export default TeamMember;