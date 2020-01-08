import React, { Component } from 'react';
import './add.css';
import newimage from '../../image/new.png' 
class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className="details">
            <img src={newimage} className="add" alt="offer"/>
            <h1 className="offertext">New Year Offer <span className="offernumber">50%</span> <span className="discount">discount</span></h1>
        </div> );
    }
}
 
export default Add;