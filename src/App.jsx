import Footer from 'HomePageMFE/Footer';
import Navbar from 'HomePageMFE/Navbar';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import RoutingComponant from './components/views/RoutingComponant/RoutingComponant';
import "./index.css";
const App = () => {
  return (
    < >
      <BrowserRouter>
       
        <Navbar />
        <RoutingComponant />
        <Footer />
      </BrowserRouter>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
