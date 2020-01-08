import React, { Component } from 'react';
import { BusList } from '../../../helper/buslist/buslist';
import { Link, withRouter } from 'react-router-dom';
import './buslist.css';
class Buslist extends Component {
    constructor(props) {
        super(props);
        this.state = { buslist:{}}

    }
    handleBusselect(data, e) {
        var bus = { "id": data.id, "name":data.travel_name, "start":data.start_time }
        localStorage.setItem('busselection', JSON.stringify(bus));
    }

    componentDidMount(){
        this.handleSearch();
    }
    handleSearch(){
        let search=JSON.parse(localStorage.getItem('search'));
        fetch('http://localhost:4000/bus/travels',{
            method:'POST',
            body:JSON.stringify({
                from:search.from,
                to:search.to
            }),
            headers:{'Content-Type':'application/json'}
        })
        .then(res=>res.json())
        .then(buslist=>{
            this.setState({buslist});
        })
    }
    
    hadleBuslist(){
        let {buslist}=this.state;
    return <div>{
        buslist.result.map((data,id)=>{
            return <div key={data.id} className="list1">
                <h2 className="count">{id+1}</h2>
                <div className="texttitle">
                 <p>Travel Name:{data.travel_name}</p>
                <p>Starting Time :{data.start_time}</p>
                </div>
                <div className="endhur">
                    <p>{data.end_hur}</p>
                </div>
               <Link to="/seats"><button className="buttonbook" onClick={this.handleBusselect.bind(this,data)}>Book</button></Link>
            </div>
        })
        }</div>
    }
    render() {
        let {buslist}=this.state;
        console.log(buslist);
        var bus= buslist.values?<div>{this.hadleBuslist()}</div>:<h1 className="available">Number Of Bus Available 0</h1>
        return (
            <div className="buslist">

                <h1 className="listtitle">Available Bus List</h1>

                <div className="list">
                    {/* <button onClick={this.handleBuslist.bind(this)}>d</button> */}
                    {/* {this.handleBuslist()} */}
                    {bus}
                </div>


            </div>
        );
    }
}

export default withRouter(Buslist);