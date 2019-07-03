import React from 'react';
import { BrowserRouter as Router,  Route, Link, Switch } from "react-router-dom";
import './App.css';
import {Navbar, Footer} from './components';
import { Home, Setting, Projects, Startpage, TeamMembers, Signup } from './pages';

type Props = {loggedin: boolean, tokenChecked: boolean, showNav: boolean, userName: string, newUser: boolean}

export default class App extends React.Component <{}, Props>{
  constructor(props: Props){
    super(props);
    this.state = { loggedin: false, tokenChecked: false, showNav: true, userName: "", newUser: false};

  }

  componentWillMount() {}
  render(){
    return(
        <Router>
          {this.state.newUser?

          <Switch>
            <Route exact path="/signup" render={()=> <Signup onChange={(e:any)=>{this.setState({userName: e.target.value})}}
                                                    login={()=>{this.setState({loggedin: true})}}
                                                     />} /> 
          </Switch>
          :<></>
        }
            {this.state.loggedin && not(this.state.newUser)?
            <><Navbar/>
            <Switch>
              <Route path="/projects" render={()=> <Projects {...this.state} />} />
              <Route path="/team" render={() => <TeamMembers {...this.state}/>} />
              <Route path="/setting" component={Setting} />
              <Route path="*" render={()=> <Home {...this.state}  />} />
            </Switch>
            <Footer/>
            </>
           :<Switch>
              <Route path="*" render={()=> <Startpage onChange={(e:any)=>{this.setState({userName: e.target.value})}}
                                                    login={()=>{this.setState({loggedin: true})}}
                                                    createAccount={()=> {this.setState({newUser: true})}}
                                                     />} />    
            </Switch>

          }
             />} />
        </Router>
);
    }
}
