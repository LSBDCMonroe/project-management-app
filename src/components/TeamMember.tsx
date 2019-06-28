import React, { useState } from 'react';
import styled from 'styled-components';
import {Card, Badge, Grid} from '../style/styled';

const TeamMember = ({firstName, lastName, email, currentProjects, finishedProjects}: any) => {
    return(
        <Card>
            <p>{firstName}'s Card</p>
        </Card>
    );
}

export default TeamMember;