import React, { Component, useCallback } from 'react';
import {withRouter,Link} from 'react-router-dom';
import './head.css';
import UserBook from '../userBookdetails/userbook';
import { Logout} from '../../../helper/auth/login';
import Login from '../../auth/login/login';
import FakeAuth from '../../authenticate';
import cookies from 'react-cookies';
import buslogo from '../../image/bus.png';
class Head extends Component {
    constructor(props) {
        super(props);
        this.state = { display:'none',display1:'none',user:{}}
        this.handlelogout=this.handlelogout.bind(this);
        this.handlelogin=this.handlelogin.bind(this);
    }
    handlelogout(){
        Logout();
        FakeAuth.logout();
        cookies.remove('token',{path:'/'});
        location.reload();
        
    }
    handlePopup(e){

        e.preventDefault();
        if(this.state.display==='none')
        {
            this.setState({display:'block'});

        }
        else{
            this.setState({display:'none'});
        }
    }
    handlelogin(){
   
        if(this.state.display1==='none')
        {
            this.setState({display1:'block'});

        }
        else{
            this.setState({display1:'none'});
           this.props.history.push('/');
        }
    }
    componentDidMount(){
      this.handleloginuser(); 
    }
    handleloginuser(){
        //token validation
        var name ="token=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
             var c= c.substring(name.length, c.length);
             fetch('http://localhost:4000/user/check',{
                 method:'POST',
                 body:JSON.stringify({token:c}),
                 headers:{'Content-Type':'application/json'}
             })
             .then(res=>{return res.json()})
             .then(user=>{console.log(user);
                    this.setState({user})
                    localStorage.setItem('userid',user.id);
              });
          }
        }  
    }
    render() { 
        var login= this.state.user.auth?<div className="log">{this.state.user.name}<p className="logout" onClick={this.handlelogout}>Logout</p></div>:<div onClick={this.handlelogin}>Login</div>


        return (
            <div>
            <div className="head">
                    <img src={buslogo} className="logo" alt="logo"/>
                    <h2 className="titlename">Booking</h2>
                    <h2 className="user" onClick={this.handlePopup.bind(this)}>Booking Details</h2>
                    <h2><Link to="/travel">Travel</Link></h2>
                    <h2 className="userbook">{login}</h2>

         </div>
             <div id="myModal1" className="modal1" style={{display:this.state.display}}>
                    <div className="modal-content1">
                        <span className="close1" onClick={this.handlePopup.bind(this)}>&times;</span>
                        <UserBook/>
                    </div>
                </div>
                <div id="myModal2" className="modal2" style={{display:this.state.display1}}>
                    <div className="modal-content2">
                        <span className="close2" onClick={this.handlelogin.bind(this)}>&times;</span>
                        <Login click={this.handlelogin}></Login>
                    </div>
                </div>

         </div>
    );
    }
}
 
export default  withRouter(Head);