import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4);
`;

const Btn = styled.button`
color: white;
background: #006666;
border: 0;
width: 3em;
height: 3em;
margin: 0;
`;

const Profilee = styled.div`
background-color: #fefefe;
margin: 2% auto;
border: 1px solid #888;
width: 80%;
padding: 0;
max-width: 800px;
color: black;
@media(max-width: 600px){
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%)
}`;

const Header = styled.div`
color: white;
background: #006666;
border: 0;
margin: 0;
height: 3em;`;


const Profile = props => {
    console.log(props);

    if (props.show) {
        

        return(
            <Wrapper>
            <Profilee>
                <Header>
                    <Btn style={{float: "right"}} onClick={props.close} className="bt right-corner" onClick={props.onClose}> &nbsp;X&nbsp; </Btn>
                </Header>
                <div>
                    <div style={{minheight: "5em", padding: "2em"}} className="blue-txt bold txt-md">
                        <p>firstName</p>
                        <p>email</p>
                        <p>Current Projects: currentProjects</p>
                        <p>Finished Projects: finishedProjects</p>
                    </div>
                </div>
            </Profilee>
            </Wrapper>
        );
    } else {
        return null;
    }
};

export default Profile;