import React, { Component } from 'react';
import './userbook.css';
class UserBook extends Component {
    constructor(props) {
        super(props);
        this.state = { details:{}}
    }
    handleCancel(event,e){
       var id=localStorage.getItem('userid');
        fetch('http://localhost:4000/bus/cancel',{
            method:"POST",
            body:JSON.stringify({id:id,seat:event.seats_number}),
            headers:{'Content-Type':'application/json'}
        })
        .then(res=> res.json())
        .then(data=>{ 
            console.log(data);
        })
        window.location.replace('/');
    }
    componentDidMount(){
        this.handleBookings();
    }
    handleBookings(){
        var user =localStorage.getItem('userid');
        fetch('http://localhost:4000/bus/mybooking',{
            method:"POST",
            body:JSON.stringify({user:user}),
            headers:{'Content-Type':'application/json'}
        })
        .then(res=> res.json())
        .then(data=>{ 
            this.setState({details:data});
           
        })

    }

    UserDetails(){
        var {details}=this.state;

            

            return <div className="Bookuser">{
                details.result.map((data,id)=>{
                    return <div key={id} className="bookdetails">
                        <div className="detailsprofile">
                        <p className="username">NAME         :{data.name}</p>
                        <p className="userphone">PHONE NUMBER:{data.phone}</p>
                        <p className="userseat">SEAT NUMBER  :{data.seats_number}</p>
                        </div>
                        <button onClick={this.handleCancel.bind(this,data)} className="cancel">cancel</button>
                    </div>
                })}
            </div>
     
    }
    render() { 

        var {details}=this.state;
        var userbookings=details.values?<div>{this.UserDetails()}</div>:<div>No Booking</div>
    return ( <div>{userbookings}</div>);
    }
}
 
export default UserBook;