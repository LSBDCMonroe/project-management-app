import React, { useState } from 'react';
import styled from 'styled-components';
import {TeamMember, Modal} from '../components';
import {Wrapper} from '../style/styled';
import {employees} from '../fakeJson';
import {Footer} from '../components';





const TeamMembers = ({userName}:{userName: string}) => {
    const [modal, setModal] = useState(false);
    return (
        <Wrapper>
            <div>
                {employees.map((i: object, index: number)=><TeamMember {...i} key={index}/>)}
            </div>
        </Wrapper>
    );
}

export default TeamMembers;