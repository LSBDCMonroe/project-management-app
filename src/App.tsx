import React from 'react';
import { BrowserRouter as Router,  Route, Link, Switch } from "react-router-dom";
import './App.css';
import {Navbar} from './components';
import {Home, Setting, Projects, Startpage} from './pages';

type Props = {
  loggedin: boolean, tokenChecked: boolean, showNav: boolean, userName: string
}

export default class App extends React.Component <{}, Props>{
  constructor(props: Props){
    super(props);
    this.state = { loggedin: false, tokenChecked: false, showNav: true, userName: ""};
  }

  componentWillMount() {}
  render(){
    if(this.state.loggedin){
      return (
        <Router>
          <div className={this.state.showNav? "grid-main": ""}>
          {/*<Navbar showNav={this.state.showNav} hide={()=>{this.setState({showNav: !this.state.showNav})}}/>*/}
          <Navbar/>
          <Switch>
            <Route path="/projects" render={()=> <Projects {...this.state} />} />
            <Route path="/setting" component={Setting} />
            <Route path="/" render={()=> <Home {...this.state}  />} />
          </Switch>
          </div>
        </Router>
      )} else{
        return(
              <Startpage
              onChange={(e:any)=>{this.setState({userName: e.target.value})}}
              login={()=>{this.setState({loggedin: true})}}/>
        )};

    }
}
