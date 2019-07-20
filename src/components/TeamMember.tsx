import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Paragraph = styled.p `
    font-size: 180%;
    margin: 1%;`;


const TeamMember = (props : any) => {
    const {firstName, lastName, email, currentProjects, finishedProjects, username} = props;
    return(
        <Link to={`/profilepage/${username}`}>
            <Paragraph >Name: {firstName} {lastName}</Paragraph>
            <Paragraph >Email: {email}</Paragraph>
            <Paragraph >Current Projects: {currentProjects}</Paragraph>
            <Paragraph >Finished Projects: {finishedProjects}</Paragraph>
        </Link>
    );
}

export default TeamMember;
