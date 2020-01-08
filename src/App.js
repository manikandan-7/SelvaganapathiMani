import React, { Component } from "react";
import "./App.css";
import PrivateRoute from "./components/private";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/home";
import Buslist from "./components/home/Buslist/buslist";
import Seats from "./components/home/booking/seats";
import Details from "./components/home/details/details";
import Preview from "./components/home/preview/preview";
import UserBook from "./components/home/userBookdetails/userbook";
import Head from "./components/home/head/head";
import Add from "./components/home/add/add";
import Travels from "./components/travel/travels/travellogin";
import TravelBus from "./components/travel/travelbus/travels";
import Reservation from "./components/travel/travelbus/reservationdetails";
import Pdf from "./components/home/pdf/previewpdf";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Head />
            <div className="home">
              <Home />
              <Add />
            </div>
          </Route>
          <Route path="/pdf"><Pdf/></Route>
          <Route exact path="/travel">
            <Head />
            <Travels />
          </Route>
          <Route exact path="/travel/:id" component={TravelBus}>
            <Head />
            <TravelBus />
          </Route>
          <Route exact path="/travel/:id/reservation">
            <Head />
            <Reservation />
          </Route>
          <PrivateRoute path="/buslist">
            <Head />
            <div className="home">
              <Home />
              <Buslist />
            </div>
          </PrivateRoute>
          <PrivateRoute exact path="/seats">
            <Head />
            <div className="home">
              <Home />
              <Seats />
            </div>
          </PrivateRoute>
          <PrivateRoute exact path="/details">
            <Head />
            <div className="home">
              <Home />
              <Details />
            </div>
          </PrivateRoute>
          <PrivateRoute exact path="/preview">
            <Head />
            <div className="home">
              <Home />
              <Preview />
            </div>
          </PrivateRoute>
          <PrivateRoute exact path="/userbooking">
            <Head />
            <div className="home">
              <Home />
              <UserBook />
            </div>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
