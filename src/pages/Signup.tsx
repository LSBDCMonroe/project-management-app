import React from 'react';
import styled from 'styled-components';
import './Startpage.css';



const Wrapper = styled.div`
  background-color: #dde1ea;
  display: grid;
  height: 100vh;
  place-items: center;
  `;

  const Header = styled.div`
  font-size: 250%;
  font-weight: bolder:
  text-align: center;
  padding-bottom: 10%;
  padding-left: 30%;
  text-decoration: underline;
  `;
function passwordCheck() {
  let textinput = React.createRef();

}

const Signup = ({login}:{login: any})=>
              <Wrapper className="wrapper-item-center">
                <div className="row card">
                  <div className="row card-content">
                    <p className="center-align">
                      <Header>SIGN UP</Header>
                    </p>
                    <div className="row">
                      <div className="col S4"><input type="text" placeholder="First Name"/></div>
                      <div className="col s6"><input type="text" placeholder="Last Name"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="text" placeholder="Username"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="text" placeholder="Email Address"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="text" placeholder="Phone Number (Optional)"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="password" placeholder="Password"/></div>
                    </div>
                    <div className="row">
                      <div className="col s12"><input type="password" placeholder="Confirm Password" onChange={passwordCheck}/></div>
                    </div>
                    <p className="center-align">
                      <button className="btn btn-small waves-effect waves-light" onClick={login}>Create Account</button>
                      <div className="logButton"><br/> Already have an Account?<a href="./Startpage"> Log In</a></div>
                    </p>
                  </div>
                </div>
              </Wrapper>;
export default Signup;
 