import React, { useState } from 'react';
import styled from 'styled-components';
import {TeamMember, Modal, Profile} from '../components';
import {Wrapper} from '../style/styled';
import {employees} from '../fakeJson';
import {Footer} from '../components';

const Btn = styled.button`
   border-radius: 1em;
   `;

const color = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";


const TeamMembers = ({userName}:{userName: string}) => {
    const [profile, setProfile] = useState(false);
    return (
        <Wrapper color={color}>
            <div>
                {employees.map((i: object, index: number)=><TeamMember {...i} key={index}/>)}

                <Btn className="bt fixed-button" onClick={()=>setProfile(true)}>
                        <i className="material-icons">add</i>
                        <span className="txt-sm">Add Project</span>
                </Btn>

                <Profile show={profile} onClose={()=>setProfile(false)}/>
            </div>
        </Wrapper>
    );
}

export default TeamMembers;