import React, { Component } from 'react';
import './details.css';
import {setDetails} from '../../../helper/bookdetails/details';
import {withRouter } from 'react-router-dom';
import { Backtoseats } from '../../../helper/seats/seats';
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleBack=this.handleBack.bind(this);
    }
    handleBack(){
        Backtoseats();
        this.props.history.push('/seats');
    }
    handleForm(){
        var seat=JSON.parse(localStorage.getItem('count'));
        
        if(seat===null)
        {
            this.props.history.push('/seats');
        }
        else{
        return<div className="grid" >
                 {seat.map((data,i)=>{
                     return( 
                         <div key={i} className="detailscolum">
                            <h3 className="bottom">SEAT NUMBER:{data}</h3>
                            
                            <input type="text"className="bottom" id={"name"+i}placeholder="NAME" required/>
                            
                            <input type="tel"className="bottom" pattern="[0-9]{10}"id={"phone"+i}placeholder="PHONE NUMBER" required/>
                     </div>
                 )})
                }   
            </div>
        }
    }
    handleSubmit(e){
        e.preventDefault();
        setDetails();
        this.props.history.push('/preview');

    }
    render() { 
        return (
            <div className="details">
                <h1 className="listtitle">USER DETAILS</h1>
                <form className="detailsform" onSubmit={this.handleSubmit}>
                    {this.handleForm()}
                    <div className="bottom detailsbutton">
                        <button className="back nb" onClick={this.handleBack}>BACK</button>
                        <button type="submit" className="next nb">NEXT</button>  
                    </div>
                </form>
                
            </div>
          );
    }
}
 
export default withRouter(Details);