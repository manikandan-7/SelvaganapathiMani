import React, { Component } from 'react';
import './travels.css';
import {Link} from 'react-router-dom';
import logo from '../../image/unologo.svg';
class TravelBus extends Component {
    constructor(props) {
        super(props);
        this.state = { travel:[],reservation:[]}
    }
    componentDidMount(){
        fetch('http://localhost:4000/bus/traveladdress',{
            method:'POST',
            body:JSON.stringify({id:this.props.match.params.id}),
            headers:{'Content-Type':'application/json'}
        })
        .then(res=>res.json())
        .then(data=> this.setState({travel:data}));
        console.log(this.props)
    }
    
    render() { 
        console.log(this.state.reservation);
        let {travel}=this.state;
    let travelname=travel[0]===undefined?<div></div>:<div className="traveltitlename"><h1>{travel[0].name}</h1><h4>{travel[0].address}</h4></div>
        let travelbus=travel.map((data,id)=>{
            return  <div key={id} className="traveledit">
                    <h3 className="fromto">{data.from_city}- ------- -{data.to_city}</h3>
                   <Link to={{pathname:`/travel/${this.props.match.params.id}/reservation`}} className="linkedit"> <button className="edit">edit</button></Link>
                </div>

        });
       
       
       return (<div className="traveladdress">
           <div className="traveldetails">
                <div className="travelname">
                    <div className="travellogo">
                        <img src={logo} alt="logo"/>
                    </div>
                    {travelname}
                </div>
            {travelbus}
            </div>
        </div>);
    }
}
 
export default TravelBus;