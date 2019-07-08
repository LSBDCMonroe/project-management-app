import React from 'react';
import {employees} from '../fakeJson';
import {Wrapper} from '../style/styled';


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
        throw "User Not Found";
    }


    return (
        <Wrapper>
            <div>
                <p>This is the profile page for {employee.username}.</p>
                <p>Email: {employee.email}</p>
            </div>
        </Wrapper>
    );
};

export default ProfilePage;