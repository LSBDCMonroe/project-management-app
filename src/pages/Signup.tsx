import React from 'react';
import styled from 'styled-components';
import './Startpage.css';
import { textAlign } from '@material-ui/system';

const Wrapper = styled.div`
  background-color: #dde1ea;
  display: grid;
  height: 100vh;
  grid-template-columns: 29% 42% 29%;
  place-items: center;
  `;

const Signup = ({login, onChange}:{login: any, onChange: any})=>
                  <Wrapper>
                    <div className="wrapper-item-left"></div>
                    <div className="wrapper-item-center">
                      <div className="container center" >
                          <div className="row card ">
                          <div className="card-image " style={{padding:"2em"}}>
                        </div>
                        <h2 className="center">Sign Up</h2>
                          <div className="">
                            <div className="row card-content">
                              <div className="input-field col s12">
                                <input placeholder={"First Name"} onChange={onChange}/>
                              </div>
                              <div className="input-field col s12">
                              <input placeholder={"3x@mpl3P@ssw0rd"} type="password" onChange={onChange}/>
                              </div>
                              <div className=" col s12 center">
                              </div>
                            </div>
                            <div className="row">
                              <div className="col m12">
                                <p className="center-align">
                                  <button className="btn btn-small waves-effect waves-light" onClick={login}>Create Account</button>
                                </p>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                    </div>
                    
                    <div className="wrapper-item-right"></div>
                      
                    </Wrapper>;
export default Signup;
