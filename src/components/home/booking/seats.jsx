import React, { Component } from "react";
import "./seats.css";
import { seatSelected, seatsBooked } from "../../../helper/seats/seats";
import { Backbuslist } from "../../../helper/buslist/buslist";
import { withRouter } from "react-router";

class Seats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowNumber: [1, 2],
      colNumber: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      seatImagesvg:
        "M211.744,6.089C208.081,2.163,203.03,0,197.52,0h-15.143c-11.16,0-21.811,8.942-23.74,19.934l-0.955,5.436  c-0.96,5.47,0.332,10.651,3.639,14.589c3.307,3.938,8.186,6.106,13.74,6.106h19.561c2.714,0,5.339-0.542,7.778-1.504l-2.079,17.761  c-2.001-0.841-4.198-1.289-6.507-1.289h-22.318c-9.561,0-18.952,7.609-20.936,16.961l-19.732,93.027l-93.099-6.69  c-5.031-0.36-9.231,1.345-11.835,4.693c-2.439,3.136-3.152,7.343-2.009,11.847l10.824,42.618  c2.345,9.233,12.004,16.746,21.53,16.746h78.049h1.191h39.729c9.653,0,18.336-7.811,19.354-17.411l15.272-143.981  c0.087-0.823,0.097-1.634,0.069-2.437l5.227-44.648c0.738-1.923,1.207-3.967,1.354-6.087l0.346-4.97  C217.214,15.205,215.407,10.016,211.744,6.089z",
      viewBox: "0 0 240.235 240.235",
      xmlns: "http://www.w3.org/2000/svg",
      version: "1.1",
      xlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      space: "preserve",
      Pickup: ["city1", "city2"],
      Drop: ["city3", "city4"],
      data:{}
    };
    this.handleSeatdetails = this.handleSeatdetails.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  handleBack() {
    Backbuslist();
    this.props.history.push("/buslist");
  }
  handleSeatdetails() {
    if (localStorage.getItem("count") === null) {
      alert("Number of seats selected 0");
      window.location.replace("/seats");
    } else {
      this.props.history.push("/details");
    }
  }
  handleSelect(event, e) {
    seatSelected(event);
  }
  componentDidMount() {
      var bus=JSON.parse(localStorage.getItem('busselection'));
      fetch('http://localhost:4000/bus/booked',{
          method:'POST',
          body:JSON.stringify({travel:bus.name}),
          headers:{'Content-Type':'application/json'}
      })
      .then(res=>res.json())
      .then(data=>seatsBooked(data));
  }
  Busseats() {
    var {
      rowNumber,
      seatImagesvg,
      viewBox,
      xmlns,
      version,
      xlink,
      x,
      y,
      space,
      colNumber
    } = this.state;
    return (
      <tbody>
        {rowNumber.map(seat => {
          return (
            <tr key={seat}>
              {colNumber.map(cell => {
                return (
                  <td
                    onClick={this.handleSelect.bind(this, seat + "" + cell)}
                    id={seat + "" + cell}
                    key={cell}
                  >
                    <svg
                      version={version}
                      viewBox={viewBox}
                      xmlns={xmlns}
                      xmlnsXlink={xlink}
                      xmlSpace={space}
                      x={x}
                      y={y}
                    >
                      <path d={seatImagesvg} />
                    </svg>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    );
  }
  render() {
    var pickup = this.state.Pickup.map(data => {
      return <option key={data}>{data}</option>;
    });
    var drop = this.state.Drop.map(data => {
      return <option key={data}>{data}</option>;
    });
    return (
      <div className="seats">
        <div>
          <h1 className="listtitle bottom">Seat Selection</h1>
          <table className="bottom table">{this.Busseats()}</table>
          <div className="point bottom">
            <h2 className="pick">
              Pickup Point :<select>{pickup}</select>
            </h2>
            <h2 className="pick">
              Drop Point :<select>{drop}</select>
            </h2>
          </div>
          <div className="bottom point">
            <button className="back nb" onClick={this.handleBack}>
              Back
            </button>
            <button onClick={this.handleSeatdetails} className="next nb">
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Seats);
