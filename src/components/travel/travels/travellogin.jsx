import React, { Component } from 'react';
import './travellogin.css';
import { withRouter } from 'react-router';
class Travels extends Component {
    constructor(props) {
        super(props);
        this.state = { email:'',pass:'',travel:{}}
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleTravellogin=(e)=>{
        e.preventDefault();
        var {email,pass}=this.state;
        console.log(email,pass);
        fetch('http://localhost:4000/bus/travellogin',{
            method:'POST',
            body:JSON.stringify({
                email:email,
                pass:pass
            }),
            headers:{'Content-Type':'application/json'}
        })
        .then(res=>res.json())
        .then(travel=>{
             this.setState({travel})
             if(travel.auth){
             this.props.history.push(`/travel/${travel.result[0].id}`);
             }    
            });
        

    }   
    render() {
        return ( <div className="travellogin">
            <div className="subtravellogin">
                <h1 className="traveltitlelogin">Travel</h1>
                <div>
                    <form onSubmit={this.handleTravellogin}>
                        <h3>E-mail</h3>
                        <input type="text" name="email" onChange={(e)=>this.handleChange(e)}/>
                        <h3>Password</h3>
                        <input type="password" name="pass" onChange={(e)=>this.handleChange(e)}/>
                        <button type="submit" className="travelbutton">Login</button>
                    </form>
                </div>
            </div>
        </div> );
    }
}
 
export default withRouter(Travels);