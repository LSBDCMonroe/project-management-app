import React, { useState } from 'react';
import styled from 'styled-components';
import {TeamMember, Modal, Profile} from '../components';
import {employees} from '../fakeJson';

const Btn = styled.button`
    width: 100%;
    border-radius: 1em;
    overflow: hidden;
    &:hover {
        box-shadow: 5px 5px 25px 1px black;
    }
`;

const color = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";

const Div = styled.div`
    margin: 1em;
    width: 66%;
    text-align: center;
    min-width: 400px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    min-height: 100vh;
    width: 100%;
    text-align: center;
    padding: .3em 1em;
    padding-left: 55px;
    background: ${props => props.color};
    @media(max-width: 600px){
    width: 100%;
    padding-left: 1em;}
`;

const TeamMembers = ({userName}:{userName: string}) => {
    const [profile, setProfile] = useState(false);
    return (
        <Wrapper color={color}>
            {employees.map((i: object, index: number)=>
                <Div>
                    <Btn onClick={()=>setProfile(true)}>
                        <TeamMember {...i} key={index}/>
                    </Btn>
                    <Profile show={profile} onClose={()=>setProfile(false)}/>
                </Div>
            )}
            <Footer/>
        </Wrapper>
    );
}

export default TeamMembers;
