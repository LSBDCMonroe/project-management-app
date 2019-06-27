import React from 'react';
import styled from 'styled-components';
import './Startpage.css';
import Logo from '../assets/images/logo_on.png';

const Wrapper = styled.div`
  background-color: #dddd;
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  place-items: center;`;

const Startpage = ({login, onChange}:{login: any, onChange: any})=>
                  <Wrapper>
                      <div className="container center" >
                        <div className="row card ">
                        <div className="card-image " style={{padding:"2em"}}>
                            <img src={Logo}/>
                      </div>
                        <div className="">
                          <div className="row card-content">
                            <div className="input-field col s12">
                              <input placeholder={"Username or Email"} onChange={onChange}/>
                              <input placeholder={"Password"} type="password" onChange={onChange}/>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col m12">
                              <p className="center-align">
                                <button className="btn btn-small waves-effect waves-light" onClick={login}>Login</button>
                              </p>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </Wrapper>;
export default Startpage;
