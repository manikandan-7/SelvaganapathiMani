import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import './home.css';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { from:'',to:'',date:''}
        this.handleSearch=this.handleSearch.bind(this);
        this.handleChanges=this.handleChanges.bind(this);
    }
    componentWillMount(){
        var search=JSON.parse(localStorage.getItem('search'));
        if(search!==null){
        this.setState({from:search.from});
        this.setState({to:search.to});
        this.setState({date:search.date});
        }
    }
    handleSearch(e){
        e.preventDefault();
        if(localStorage.getItem('loginstatus')){ 
            var {from,to,date}=this.state;
            var data={"from":from,"to":to,"date":date}
            localStorage.setItem("search",JSON.stringify(data));
            this.props.history.push('/buslist');
            location.reload();
         }
        else{
            alert("login");
        }
    
    }
    handleChanges(e){
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value})
    }
    render() { 
        var location=JSON.parse(localStorage.getItem('bus'));
        var items=location.map(data =>{ return <option value={data} key={data}/>})
        return ( 
            <div className="booking">
                <div>
                    <div>
                        <h1 className="Bussearchform">Bus Booking</h1>
                        <form onSubmit={this.handleSearch} className="searchform">
                            <input list="locations" className="from searchinput"name="from" onChange={this.handleChanges} placeholder="FROM" value={this.state.from}required/>
                             <datalist id="locations">{items}</datalist>
                            <input list="locations" name="to"className="to searchinput" onChange={this.handleChanges}placeholder="TO"value={this.state.to}required/>
                            <datalist id="locations">{items}</datalist>
                            <input type="date" min="2019-12-31" name="date"className="searchinput  " value={this.state.date}onChange={this.handleChanges} required/>
                            <button type="submit" className="searchbutton">SEARCH</button>
                        </form>
                    </div>
                </div>
             
            </div>
         );
    }
}
 
export default withRouter(Home);