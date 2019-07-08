import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import './App.css';
import {Navbar, Footer} from './components';
import { Home, Setting, Projects, Startpage, TeamMembers, ProfilePage } from './pages';

type Props = {loggedin: boolean, tokenChecked: boolean, showNav: boolean, userName: string}

export default class App extends React.Component <{}, Props>{
  constructor(props: Props){
    super(props);
    this.state = { loggedin: false, tokenChecked: false, showNav: true, userName: ""};
  }

  componentWillMount() {}
  render(){
    return(
        <Router>
            {this.state.loggedin?
            <><Navbar/>
            <Switch>
              <Route path="/projects" render={()=> <Projects {...this.state} />} />
              <Route path="/team" render={() => <TeamMembers {...this.state}/>} />
              <Route path="/profilepage" render={() => <ProfilePage {...this.state}/>} />
              <Route path="/setting" component={Setting} />
              <Route path="*" render={()=> <Home {...this.state}  />} />
            </Switch>
            <Footer/>
            </>
           :<Switch>
              <Route path="*" render={()=> <Startpage onChange={(e:any)=>{this.setState({userName: e.target.value})}}
                                                    login={()=>{this.setState({loggedin: true})}}/>} />
            </Switch>
            }
        </Router>
);
    }
}
