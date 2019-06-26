import React from 'react';
import styled from 'styled-components';
import './Startpage.css';
//background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); height: 100vh;
  
const Wrapper = styled.div`
  background-color: #ffffff;  
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  place-items: center;
`;

const Start = styled.form`
  height:350px;
  text-align: center;
  display: grid;
  grid-template-rows: 1fr 1fr auto;`;


const Startpage = ({login, onChange}:{login: any, onChange: any})=>
<Wrapper>
                      <div className="container center" >
                        <div className="row card ">
                        <div className="col m12 m6">
                          <h2 className="center-align blue-text">Login</h2>
                          <div className="row card-content">
                            <div className="input-field col s12">
                              <div>UserName<input onChange={onChange}/></div>
                              <div>Password<input type="password" onChange={onChange}/></div>
                            </div>
                          </div> 
                          <div className="row">
                            <div className="col m12">
                              <p className="center-align">
                                <button className="btn btn-large waves-effect waves-light" onClick={login}>
                                  Login
                                </button>
                              </p>                                                      
                            </div>                            
                          </div>                              
                        </div>     
                        </div>
                      </div>
                      </Wrapper>;

export default Startpage;
