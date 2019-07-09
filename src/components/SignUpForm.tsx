import React, { Component } from 'react';
import '../pages/Startpage.css';



class SignUpForm extends Component<any, any>{

    constructor(props:any){
        super(props);
        this.state = {
            firstName : "Sonam",
            lastName : "",
            userName : "",
            email : "",
            phone : "",
            password : "",
            confirmPassword : ""
        }
    }

    handleName = (event: any) =>{
        console.log(event.target);
    }

    render(){
        return(
            <div>
                <div className="row">
                <div className="col S4">
                    <input type="text" placeholder="First Name" defaultValue={this.state.firstName}
                    onChange={this.handleName}  />
                </div>
                <div className="col s6">
                    <input type="text" placeholder="Last Name" defaultValue={this.state.lastName} />
                </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <input type="text" placeholder="Username" defaultValue={this.state.userName} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <input type="text" placeholder="Email Address" defaultValue={this.state.email}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <input type="text" placeholder="Phone Number (Optional)" defaultValue={this.state.phone} />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <input type="password" placeholder="Password" defaultValue={this.state.password}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <input type="password" placeholder="Confirm Password" defaultValue={this.state.confirmPasssword} />
                    </div>
                </div>
                <div className="center-align">
                    <button className="btn btn-small waves-effect waves-light" >Create Account</button>
                    <div className="logButton"><br /> Already have an Account?
                        <a href="./Startpage"> Log In</a>
                    </div>
                </div>  
            </div>          
            )
    }
        

}

export default SignUpForm;