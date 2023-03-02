import Footer from 'HomePageMFE/Footer';
import Navbar from 'HomePageMFE/Navbar';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/views/Header/Header";
//import Navbar from "./components/views/Navbar/Navbar";
import RoutingComponant from './components/views/RoutingComponant/RoutingComponant';
import "./index.css";
const App = () => {
  return (
    < >
      <BrowserRouter>
        <Header />
        <Navbar />
        <RoutingComponant />
        <Footer />
      </BrowserRouter>
    </>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
