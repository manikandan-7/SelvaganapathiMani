import React, { Component } from 'react';
import { conformDetails, Backtodetails } from '../../../helper/bookdetails/details';
import './preview.css';
import { withRouter } from 'react-router';

class Preview extends Component {
    constructor(props) {
        super(props);
        this.state = { display:'none' }
        this.handleConform=this.handleConform.bind(this);
        this.handleBack=this.handleBack.bind(this);
    }
    handleBack(){
        Backtodetails();
        this.props.history.push('/details');
    }
    handleConform(e){
        e.preventDefault();
        console.log("conf");

        if(this.state.display==='none')
        {   
            console.log("1");
            this.setState({display:'block'});
            console.log(this.state.display);
            
        }
        else{
            this.setState({display:'none'});
            conformDetails();
            this.props.history.push('/');
        }
      
    }


    preview(){
        var details=JSON.parse(localStorage.getItem('tempdetails'));
        
        console.log(details);
        if(details===null)
        {        
           this.props.history.push('/details');
        }else{

        return <div className="grid">{Object.keys(details).map((id)=>{
                                        return(<div key={id+1} className="detailscolum">
                                            <p>PERSON {id}</p>
                                            <p>NAME:<span>{details[id].name}</span></p>
                                            <p>PHONE NUMBER :<span>{details[id].phone}</span></p>
                                            <p>SEAT NUMBER :<span>{details[id].seatnumber}</span></p>
                                            </div>)
                                        })
                                    }</div>
                                }

    }
    render() {   
        var travel=JSON.parse(localStorage.getItem('busselection'));
        var name;
        console.log(travel);
        if(travel===null){ this.props.history.push('/buslist')}else{name=travel.name}
       
        return ( <div className="details">
                    <h1 className="listtitle">TRAVEL NAME :{name}</h1>

                    <form className="detailsform">
                        {this.preview()}
                        
                    <div className="bottom detailsbutton">
                        <button className="back nb" onClick={this.handleBack}>BACK</button>
                        <button onClick={this.handleConform} className="next nb">CONFORM</button>  
                    </div>
                    </form>
                    <div id="myModal" className="modal" style={{display:this.state.display}}>
                    <div className="modal-content">
                        <span className="close" onClick={this.handleConform}>&times;</span>
                        <p>Successfully Booked</p>
                    </div>
                </div>     
        </div>
        );
    }
}
 
export default withRouter(Preview);