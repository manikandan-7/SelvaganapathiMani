import React, { Component } from "react";
class Pdf extends Component {
  constructor(props) {
    super(props);
    this.state = { details: {} };
  }

  componentDidMount() {
    this.handleBookings();
  }
  handleBookings() {
    var user = localStorage.getItem("userid");
    fetch("http://localhost:4000/bus/mybooking", {
      method: "POST",
      body: JSON.stringify({ user: user }),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ details: data });
      });
  }
  UserDetails() {
    var { details } = this.state;

    return <div>{}</div>;
  }
  render() {
    var { details } = this.state;
    var userbookings = details.values ? (
      <div>{this.UserDetails()}</div>
    ) : (
      <div>No Booking</div>
    );
    return <div>{userbookings}</div>;
  }
}

export default Pdf;
