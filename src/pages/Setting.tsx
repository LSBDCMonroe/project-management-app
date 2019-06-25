import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  width: calc(100% - 50px);
  text-align: center;
  padding: .3em 1em;
  margin-left: 50px;
`;

const Setting =({userName}:{userName: string})=> <Wrapper className="center">
                                                    <div className="top">Hello, {userName}</div>
                                                    <i className="fas fa-sliders-h txt-xl"></i>
                                                    <h1>Setting</h1>
                                                  </Wrapper>;

export default Setting;
