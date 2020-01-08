import React, { Component } from "react";
import "./reservationdetails.css";
class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = { reservation: {} };
  }
  componentDidMount() {
    this.handleDetails();
    console.log(this.props);
  }
  handleDetails() {
    fetch("http://localhost:4000/bus/travelbooked", {
      method: "POST",
      body: JSON.stringify({ name: "NUMBER 1 TRAVELS" }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => this.setState({ reservation: data }));
  }
  handleReservationcancel = (seat, travel) => {
    fetch("http://localhost:4000/bus/cancel", {
      method: "POST",
      body: JSON.stringify({
        seat: seat,
        name: travel
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => console.log(data));
    location.reload();
  };
  handleReservationok = (seat, travel) => {
    fetch("http://localhost:4000/bus/ok", {
      method: "POST",
      body: JSON.stringify({
        seat: seat,
        name: travel
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => console.log(data));
    location.reload();
  };
  handleReservation() {
    let { reservation } = this.state;
    return (
      <tbody>
        <tr className="tablerow">
          <th className="values">NAME</th>
          <th className="values">PHONE NUMBER</th>
          <th className="values">SEAT NUMBER</th>
        </tr>
        {reservation.result.map(data => {
          console.log(data);
          return (
            <tr key={data.name} className="tablerow">
              <td className={data.mark === null ? "namecancel" : "value ok"}>
                {data.name}
              </td>
              <td className={data.mark === null ? "namecancel" : "value ok"}>
                {data.phone}
              </td>
              <td className={data.mark === null ? "namecancel" : "value ok"}>
                {data.seats_number}
              </td>
              <td>
                <button
                  className={
                    data.mark === null ? "buttonok okcolor" : "buttonok"
                  }
                  onClick={() =>
                    this.handleReservationok(
                      data.seats_number,
                      data.travel_name
                    )
                  }
                  disabled={data.mark === null ? false : true}
                >
                  Ok
                </button>
              </td>
              <td>
                <button
                  className={
                    data.mark === null ? "buttoncancel cancel" : "buttoncancel"
                  }
                  onClick={() =>
                    this.handleReservationcancel(
                      data.seats_number,
                      data.travel_name
                    )
                  }
                  disabled={data.mark === null ? false : true}
                >
                  Cancel
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
  render() {
    let { reservation } = this.state;
    let booked = reservation.values ? (
      this.handleReservation()
    ) : (
      <tbody>
        <tr>
          <td>No Bookings</td>
        </tr>
      </tbody>
    );
    return (
      <div className="reservation">
        <table className="reser">{booked}</table>
      </div>
    );
  }
}

export default Reservation;
