import React from 'react';
import styled from 'styled-components';
import './Startpage.css';
import {SignUpForm} from '../components';



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


const Signup = ({login}:{login: any})=>
              <Wrapper className="wrapper-item-center">
                <div className="row card">
                  <div className="row card-content">
                    <p className="center-align">
                      <Header>SIGN UP</Header>
                    </p>
                    < SignUpForm></ SignUpForm>
                    





                  </div>
                </div>
              </Wrapper>;
export default Signup;
 